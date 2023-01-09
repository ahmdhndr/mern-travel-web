function commafy(num) {
  const str = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str;
}

export default commafy;