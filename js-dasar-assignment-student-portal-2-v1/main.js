function process_argv() {
    const { argv } = process;
    const result = studentStatus(argv[2], argv[3]);

    return result;
}

function studentStatus(name, studentId) {
    let codeFakultas = "";
    let codeProdi = "";
    let codeYears = "";

    console.log(studentId);

    if (studentId.slice(0, 5) === "FISIP") {
        codeFakultas = "Fakultas Ilmu Sosial dan Politik"
        codeYears = studentId.slice(5, 9)
        codeProdi = studentId.slice(9, 11)
    } else if (studentId.slice(0, 4) === "FTIS") {
        codeFakultas = "Fakultas Teknologi Informasi dan Sains"
        codeYears = studentId.slice(4, 8)
        codeProdi = studentId.slice(8, 10)
    } else if (studentId.slice(0, 2) === "FE") {
        codeFakultas = "Fakultas Ekonomi"
        codeYears = studentId.slice(2, 6)
        codeProdi = studentId.slice(6, 8)
    } else if (studentId.slice(0, 2) === "FT") {
        codeFakultas = "Fakultas Teknik"
        codeYears = studentId.slice(2, 6)
        codeProdi = studentId.slice(6, 8)
    }

    let prodi = "";
    if (codeProdi === "21") {
        prodi = "Ekonomi"
    } else if (codeProdi === "22") {
        prodi = "Manajemen"
    } else if (codeProdi === "23") {
        prodi = "Akuntansi"
    } else if (codeProdi === "31") {
        prodi = "Administrasi Publik"
    } else if (codeProdi === "32") {
        prodi = "Administrasi Bisnis"
    } else if (codeProdi === "33") {
        prodi = "Hubungan Internasional"
    } else if (codeProdi === "41") {
        prodi = "Teknik Sipil"
    } else if (codeProdi === "42") {
        prodi = "Arsitektur"
    } else if (codeProdi === "51") {
        prodi = "Matematika"
    } else if (codeProdi === "52") {
        prodi = "Fisika"
    } else if (codeProdi === "53") {
        prodi = "Informatika"
    }

    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${prodi} pada ${codeFakultas} sejak tahun ${codeYears}.`
}


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;
