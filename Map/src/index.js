import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as C from 'lucid-cardano';

const pinningScript = {
	type: "PlutusV2",
	script: "590846590843010000323232332232323232323232323233223233223232323232322323232223232533532323235002222222222222533533355301812001321233001225335002210031001002502125335333573466e3c0380040b80b44d408c00454088010840b840b0d4cccd5cd19b8735573aa01290001199911091998008020018011bae35742a0126eb4d5d0a8041bad357426ae8940208c98c8080cd5ce01181100f1110019a9999ab9a3370e6aae75400d2000233221233001003002323232323232323232323232323333573466e1cd55cea8062400046666666666664444444444442466666666666600201a01801601401201000e00c00a00800600466a0340366ae854030cd406806cd5d0a80599a80d00e1aba1500a3335501e75ca03a6ae854024ccd54079d7280e9aba1500833501a02735742a00e666aa03c050eb4d5d0a8031919191999ab9a3370e6aae75400920002332212330010030023232323333573466e1cd55cea8012400046644246600200600466a064eb4d5d0a80118199aba135744a004464c6406a66ae700e00dc0cc4d55cf280089baa00135742a0046464646666ae68cdc39aab9d5002480008cc8848cc00400c008cd40c9d69aba150023033357426ae8940088c98c80d4cd5ce01c01b81989aab9e5001137540026ae84d5d1280111931901899ab9c03403302f135573ca00226ea8004d5d0a80299a80d3ae35742a008666aa03c04840026ae85400cccd54079d710009aba150023026357426ae8940088c98c80b4cd5ce01801781589aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226aae7940044dd50009aba150033016357426ae89400c8c98c807ccd5ce01101080e910011999ab9a3370e6aae74dd5002240004040464c6403c66ae70084080070407c4c98c8074cd5ce2481035054350001f135573ca00226ea80044d5d1280089aab9e500113754002640026aa0304422444a66a00226a00644002442666a00a440046008004666aa600e2400200a0080022464460046eb0004c8004d5406088cccd55cf80092805119a80498021aba1002300335744004030464646666ae68cdc39aab9d5002480008cc8848cc00400c008c038d5d0a80118029aba135744a004464c6402c66ae700640600504d55cf280089baa0012323232323333573466e1cd55cea8022400046666444424666600200a0080060046464646666ae68cdc39aab9d5002480008cc8848cc00400c008c05cd5d0a80119a80780b1aba135744a004464c6403666ae700780740644d55cf280089baa00135742a008666aa010eb9401cd5d0a8019919191999ab9a3370ea0029002119091118010021aba135573ca00646666ae68cdc3a80124004464244460020086eb8d5d09aab9e500423333573466e1d400d20002122200323263201d33573804003e03603403226aae7540044dd50009aba1500233500b75c6ae84d5d1280111931900b99ab9c01a019015135744a00226ae8940044d55cf280089baa0011335500175ceb44488c88c008dd5800990009aa80a91191999aab9f00225008233500733221233001003002300635573aa004600a6aae794008c010d5d100180b09aba100111220021221223300100400312232323333573466e1d400520002350073005357426aae79400c8cccd5cd19b875002480089401c8c98c8048cd5ce00a80a00800789aab9d5001137540022424460040062244002464646666ae68cdc3a800a400c46424444600800a600e6ae84d55cf280191999ab9a3370ea004900211909111180100298049aba135573ca00846666ae68cdc3a801a400446424444600200a600e6ae84d55cf280291999ab9a3370ea00890001190911118018029bae357426aae7940188c98c8040cd5ce00980900700680600589aab9d500113754002464646666ae68cdc39aab9d5002480008cc8848cc00400c008c014d5d0a8011bad357426ae8940088c98c8030cd5ce00780700509aab9e5001137540024646666ae68cdc39aab9d5001480008dd71aba135573ca004464c6401466ae700340300204dd5000919191919191999ab9a3370ea002900610911111100191999ab9a3370ea004900510911111100211999ab9a3370ea00690041199109111111198008048041bae35742a00a6eb4d5d09aba2500523333573466e1d40112006233221222222233002009008375c6ae85401cdd71aba135744a00e46666ae68cdc3a802a400846644244444446600c01201060186ae854024dd71aba135744a01246666ae68cdc3a8032400446424444444600e010601a6ae84d55cf280591999ab9a3370ea00e900011909111111180280418071aba135573ca018464c6402666ae7005805404404003c03803403002c4d55cea80209aab9e5003135573ca00426aae7940044dd50009191919191999ab9a3370ea002900111999110911998008028020019bad35742a0086eb4d5d0a8019bad357426ae89400c8cccd5cd19b875002480008c8488c00800cc020d5d09aab9e500623263200c33573801e01c01401226aae75400c4d5d1280089aab9e500113754002464646666ae68cdc3a800a400446424460020066eb8d5d09aab9e500323333573466e1d400920002321223002003375c6ae84d55cf280211931900499ab9c00c00b007006135573aa00226ea8004488c8c8cccd5cd19b87500148010848880048cccd5cd19b875002480088c84888c00c010c018d5d09aab9e500423333573466e1d400d20002122200223263200a33573801a01801000e00c26aae7540044dd50009191999ab9a3370ea0029001100311999ab9a3370ea0049000100311931900319ab9c009008004003135573a6ea8005261220021220011200149010350543100112323001001223300330020020011",
};

var map = L.map('map').setView([32.077987, 34.774196], 2);

const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
	var location = (e.latlng.lat).toFixed(6).toString() + " " + (e.latlng.lng.toFixed(6)).toString();
	document.getElementById("pinLocationText").value = location;
	popup
		.setLatLng(e.latlng)
		.setContent(location)
		.openOn(map);
}

map.on('click', onMapClick);

const million = 1000000;

const PinningDatum = C.Data.Object({
	owner: C.Data.String,
	latitude: C.Data.BigInt,
	longitude: C.Data.BigInt,
});

function removeChildren(elt) {
	while (elt.firstChild) {
		elt.removeChild(elt.lastChild);
	}
}

async function loadCardano() {
	const eternl = window.cardano.eternl;
	if (!eternl) {
		setTimeout(loadCardano);
	} else {
		const api = await eternl.enable();
		console.log("Eternl is enabled");
		const lucid = await C.Lucid.new(
			new C.Blockfrost("https://cardano-preview.blockfrost.io/api/v0", "Insert your Blockfrost API key"),
			"Preview",
		);
		console.log("Lucid is active");
		lucid.selectWallet(api);
		return lucid;
	}
}

async function submitCardanoTx(signedTx) {
	const tid = await signedTx.submit();
	console.log("Cardano transaction submitted: " + tid);
	addLinkToTable("cardanoTxTable", "https://preview.cardanoscan.io/transaction/" + tid, tid);
}

async function signAndSubmitCardanoTx(tx) {
	try {
		const signedTx = await tx.sign().complete();
		await submitCardanoTx(signedTx);
	} catch (err) {
		alert(`Cardano transaction info: ${err.info}`);
		throw (err);
	}
}

async function getCardanoPKH() {
	const addr = await lucid.wallet.address();
	const details = await C.getAddressDetails(addr);
	return details.paymentCredential.hash;
}

async function getStatus() {
	const pkh = await getCardanoPKH();
	const utxos = await lucid.wallet.getUtxos();
	const lovelace = utxos.reduce((acc, utxo) => acc + utxo.assets.lovelace, 0n);
	const pins = await pinningUTxOs();
	return {
		cardanoPKH: pkh,
		cardanoBalance: lovelace,
		pinningUTxOs: pins,
	};
}

function addCell(tr, content) {
	const td = document.createElement('td');
	tr.appendChild(td);
	td.appendChild(document.createTextNode(content));
}

function addLinkToTable(tableId, href, text) {
	const txTable = document.getElementById('cardanoTxTable');
	const tr = document.createElement('tr');
	txTable.appendChild(tr);
	const td = document.createElement('td');
	tr.appendChild(td);
	const a = document.createElement('a');
	td.appendChild(a);
	a.setAttribute('href', href);
	a.setAttribute('target', '_blank');
	a.appendChild(document.createTextNode(text));
}

function addCopyCell(row, text) {
	const td = document.createElement("td");
	row.appendChild(td);
	const span = document.createElement("span");
	td.appendChild(span);
	const uid = String(Math.random()).slice(2);
	span.setAttribute("id", uid);
	span.appendChild(document.createTextNode(text));
	const button = document.createElement("button");
	td.appendChild(button);
	button.setAttribute("type", "button");
	button.classList.add("btn");
	button.classList.add("btn-outline-primary");
	button.classList.add("btn-sm");
	button.addEventListener("click", () => onCopy(uid));
}

async function setStatus() {
	const status = await getStatus();

	const cardanoPKH = document.getElementById('cardanoPKH');
	removeChildren(cardanoPKH);
	cardanoPKH.appendChild(document.createTextNode(status.cardanoPKH));

	const cardanoBalance = document.getElementById('cardanoBalance');
	const ada = Number(status.cardanoBalance) / million;
	removeChildren(cardanoBalance);
	cardanoBalance.appendChild(document.createTextNode(ada));

	const pinningUTxOsTable = document.getElementById('pinningUTxOsTable');
	removeChildren(pinningUTxOsTable);
	for (const x of status.pinningUTxOs) {
		const tr = document.createElement('tr');
		pinningUTxOsTable.appendChild(tr);

		addCopyCell(tr, x.utxo.txHash + '#' + x.utxo.outputIndex);
		addCopyCell(tr, x.datum.owner);

		const dLat = (Number(x.datum.latitude) / million).toFixed(6);
		const dLng = (Number(x.datum.longitude) / million).toFixed(6);
		addCell(tr, (dLat).toString() + ' ' + (dLng).toString());
	}
}

async function pinningUTxOs() {
	const utxos = await lucid.utxosAt(pinningAddress);
	const res = [];
	for (const utxo of utxos) {
		const datum = utxo.datum;
		if (datum) {
			try {
				const d = C.Data.from(datum, PinningDatum);
				res.push({
					utxo: utxo,
					datum: d
				});
			} catch (err) {}
		}
	}
	return res;
}

async function findUTxO(ref) {
	const chunks = ref.split('#');
	const tid = chunks[0];
	const ix = parseInt(chunks[1]);
	const utxos = await pinningUTxOs();
	for (const utxo of utxos) {
		if (utxo.utxo.txHash == tid && utxo.utxo.outputIndex == ix) {
			return utxo;
		}
	}
	return null;
}

async function getReferenceUTxO() {
	const utxos = await lucid.utxosByOutRef([{
		txHash: "088e4fec338835ca0789b58f2062234764ec24f28284a8ee9fc20e29f73fd788",
		outputIndex: 0
    }]);
	return utxos[0];
}

async function onPin() {
	const ownerText = document.getElementById('pinOwnerText');
	const owner = ownerText.value;

	const amount = BigInt(0); // The pinning cost is zero lovelace to ensure that using the traceability solution is as cheap as possible since the minimum fee for a valid transation is automatically calculated

	const locationText = document.getElementById('pinLocationText');
	const location = locationText.value;
	const latitude = BigInt(Math.round(Number(location.split(' ')[0]) * million));
	const longitude = BigInt(Math.round(Number(location.split(' ')[1]) * million));

	const d = {
		owner: owner,
		latitude: latitude,
		longitude: longitude,
	};

	const datum = C.Data.to(d, PinningDatum);

	const tx = await lucid
		.newTx()
		.payToContract(pinningAddress, {
			inline: datum
		}, {
			lovelace: amount
		})
		.complete();
	signAndSubmitCardanoTx(tx);

	ownerText.value = "";
	locationText.value = "";
}

async function onHide() {
	const pkh = await getCardanoPKH();

	const referenceText = document.getElementById('hideReferenceText');
	const reference = referenceText.value;
	
	const utxo = await findUTxO(reference);
	if (utxo) {
		const tx = await lucid
			.newTx()
			.collectFrom([utxo.utxo], C.Data.to(new C.Constr(0, [])))
			.readFrom([referenceUTxO])
			.addSignerKey(pkh)
			.complete();
		signAndSubmitCardanoTx(tx);
	} else {
		console.log("That UTxO is not found");
	}

	referenceText.value = "";
}

function onShow() {
	var table = document.getElementById('pinningUTxOsTable');
	var pins = [];
	for (var r = 0, n = table.rows.length; r < n; r++)
		pins.push(table.rows[r].cells[2].innerHTML);
	if (!pins.length) {
		console.log("No data is currently available");
	} else {
		map.remove();
		map = L.map('map').setView([Number(pins[pins.length - 1].split(' ')[0]), Number(pins[pins.length - 1].split(' ')[1])], 2); // This recenters the map on the latest pin
		layer.addTo(map);
		map.on('click', onMapClick);
		var marker;
		for (var i = 0; i < pins.length; i++) {
			marker = new L.marker([Number(pins[i].split(' ')[0]), Number(pins[i].split(' ')[1])])
				.bindPopup(pins[i])
				.addTo(map);
		}
	}
}

function onCopy(elt) {
	navigator.clipboard.writeText(document.getElementById(elt).firstChild.textContent);
}

window.C = C;
window.lucid = await loadCardano();
const pinningAddress = lucid.utils.validatorToAddress(pinningScript);
const referenceUTxO = await getReferenceUTxO();

setStatus();
setInterval(setStatus, 1000);

document.getElementById("pinButton").addEventListener("click", onPin);
document.getElementById("hideButton").addEventListener("click", onHide);
document.getElementById("showButton").addEventListener("click", onShow);
document.getElementById('cardanoPKHButton').addEventListener("click", () => onCopy("cardanoPKH"));

/* This is only used once in order to deploy the Pinning Script so that we can reference it later
document.getElementById("deployButton").addEventListener("click", onDeploy);

async function onDeploy() {
    const tx = await lucid
        .newTx()
        .payToContract(pinningAddress, { inline: C.Data.void(), scriptRef: pinningScript }, {})
        .complete();
    signAndSubmitCardanoTx(tx);
}
*/
