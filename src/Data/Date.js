const setDate = (fechaString) => {
  var fechaSp = fechaString.split("-");
  var anio = fechaSp[0];
  var mes = fechaSp[1] - 1;
  var dia = fechaSp[2];

  return new Date(anio, mes, dia);
};

export default setDate;
