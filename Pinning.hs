{-# LANGUAGE DataKinds         #-}
{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell   #-}

module Pinning where
    
import           Plutus.V2.Ledger.Api      (BuiltinData, PubKeyHash,
                                            ScriptContext (scriptContextTxInfo),
                                            TxInfo,
                                            Validator, mkValidatorScript)
import           Plutus.V2.Ledger.Contexts (txSignedBy)
import           PlutusTx                  (compile, unstableMakeIsData)
import           PlutusTx.Prelude          (Integer, Bool (True, False), otherwise, ($))
import           Prelude                   (IO)
import           Utilities                 (wrap,
                                            writeValidatorToFile)

-- ON-CHAIN VALIDATOR

data PinningDatum = PinningDatum
    { owner     :: PubKeyHash
    , latitude  :: Integer
    , longitude :: Integer
    }

unstableMakeIsData ''PinningDatum

{-# INLINABLE mkPinningValidator #-}
mkPinningValidator :: PinningDatum -> () -> ScriptContext -> Bool
mkPinningValidator dat () ctx
 | signedByOwner = True
 | otherwise     = False

  where
    info :: TxInfo
    info = scriptContextTxInfo ctx

    signedByOwner :: Bool
    signedByOwner = txSignedBy info $ owner dat

{-# INLINABLE  mkWrappedmkPinningValidator #-}
mkWrappedmkPinningValidator :: BuiltinData -> BuiltinData -> BuiltinData -> ()
mkWrappedmkPinningValidator = wrap mkPinningValidator

validator :: Validator
validator = mkValidatorScript $$(compile [|| mkWrappedmkPinningValidator ||])

-- HELPER FUNCTION

saveVal :: IO ()
saveVal = writeValidatorToFile "./assets/pinning.plutus" validator
