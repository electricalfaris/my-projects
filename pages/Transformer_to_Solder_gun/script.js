// pages/Transformer_to_Solder_gun/script.js
function getTemplateRecord(no) {
  return `
<div class="col-sm-6 col-md-4 mb-3 img-wrapper">
 <img
   src="../../images/transformer_to_soldering_iron/${no}.png"
   alt="${no}.png" class="fluid img-thumbnail">
 </div>`;
}
onload = () => {
  console.log("onload()...");
  var root = document.querySelector("#root");

  const imagesSum = 100;
  for (let i = 1; i < imagesSum; i++) {
    console.log(getTemplateRecord(i));
    root.insertAdjacentHTML("beforeend", getTemplateRecord(i));
  }
};
