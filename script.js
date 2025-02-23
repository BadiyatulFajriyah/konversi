function convert() {
    let number = document.getElementById("number").value;
    let conversionType = document.getElementById("conversionType").value;
    let result = "";

    if (number === "") {
        result = "Masukkan angka terlebih dahulu!";
    } else {
        switch (conversionType) {
            case "desimal-ke-biner":
                result = `Biner: ${parseInt(number, 10).toString(2)}`;
                break;
            case "desimal-ke-oktal":
                result = `Oktal: ${parseInt(number, 10).toString(8)}`;
                break;
            case "biner-ke-desimal":
                if (!/^[01]+$/.test(number)) {
                    result = "Masukkan bilangan biner yang valid (hanya 0 dan 1)!";
                } else {
                    result = `Desimal: ${parseInt(number, 2)}`;
                }
                break;
            case "oktal-ke-desimal":
                if (!/^[0-7]+$/.test(number)) {
                    result = "Masukkan bilangan oktal yang valid (hanya 0-7)!";
                } else {
                    result = `Desimal: ${parseInt(number, 8)}`;
                }
                break;
            case "oktal-ke-biner":
                if (!/^[0-7]+$/.test(number)) {
                    result = "Masukkan bilangan oktal yang valid (hanya 0-7)!";
                } else {
                    result = `Biner: ${parseInt(number, 8).toString(2)}`;
                }
                break;
            default:
                result = "Pilih jenis konversi!";
        }
    }

    document.getElementById("result").innerText = result;
}
