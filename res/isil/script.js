document.getElementById('DATE').textContent = 
    ISILDATE.substring(0, 4)         + "年" +
    Number(ISILDATE.substring(4, 6)) + "月" + 
    Number(ISILDATE.substring(6))    + "日";

document.getElementById('PUBLIB').textContent = ISILNUMS.PUBLIB;
document.getElementById('LIB').textContent = ISILNUMS.LIB;
document.getElementById('DELLIB').textContent = ISILNUMS.DELLIB;
document.getElementById('MUS').textContent = ISILNUMS.MUS;
document.getElementById('DELMUS').textContent = ISILNUMS.DELMUS;
document.getElementById('ARC').textContent = ISILNUMS.ARC;
document.getElementById('DELARC').textContent = ISILNUMS.DELARC;
document.getElementById('ALL').textContent = ISILNUMS.PUBLIB + ISILNUMS.LIB + ISILNUMS.MUS + ISILNUMS.ARC;
document.getElementById('DELALL').textContent = ISILNUMS.DELLIB + ISILNUMS.DELMUS + ISILNUMS.DELARC;

document.getElementById('SUMLIB').textContent = ISILNUMS.PUBLIB + ISILNUMS.LIB + ISILNUMS.DELLIB;
document.getElementById('SUMMUS').textContent = ISILNUMS.MUS + ISILNUMS.DELMUS;
document.getElementById('SUMARC').textContent = ISILNUMS.ARC + ISILNUMS.DELARC;

document.getElementById('SUMALL').textContent = ISILNUMS.PUBLIB + ISILNUMS.LIB + ISILNUMS.DELLIB + ISILNUMS.MUS + ISILNUMS.DELMUS + ISILNUMS.ARC + ISILNUMS.DELARC;
