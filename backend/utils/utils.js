const lexicon = [..."abcdefghijklmnopqrstuvwxyz"];

function shiftLetters(cip, n) {
  return [...cip]
    .map((char) => {
      return lexicon.findIndex((ch) => ch == char) != -1
        ? lexicon[(lexicon.findIndex((ch) => ch == char) + n) % 26]
        : char;
    })
    .join("");
}

module.exports = function decrypt(cip, det) {
  let res_rec = [];
  let res_rec_no = [];
  for (let i = 0; i < 26; i++) {
    let curr = shiftLetters(cip, i);
    let curr_stat = det.default(curr);
    curr_stat ? res_rec_no.push(curr) : res_rec.push(curr);
  }
  return {
    corr: res_rec,
    incorr: res_rec_no,
    all_shifts: [...res_rec, ...res_rec_no]
  };
};
