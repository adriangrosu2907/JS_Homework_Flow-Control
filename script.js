function carTaxesCalc() {
    let vehicleType = prompt('Please choose the type of your vehicle:');
    let vehicleCC = prompt(
      'Please enter the cilindrical capacity of your vehicle:'
    );
    let vehicleTaxes = 0;
  
    if (vehicleType === 'Motocicleta') {
      if (vehicleCC <= 1600) {
        vehicleTaxes = (vehicleCC / 200) * 8;
      } else {
        vehicleTaxes = (vehicleCC / 200) * 9;
      }
    } else if (vehicleType === 'Autoturism') {
      if (vehicleCC <= 1600) {
        vehicleTaxes = (vehicleCC / 200) * 8;
      } else if (vehicleCC <= 2000) {
        vehicleTaxes = (vehicleCC / 200) * 22;
      } else if (vehicleCC <= 2600) {
        vehicleTaxes = (vehicleCC / 200) * 85;
      } else if (vehicleCC <= 3000) {
        vehicleTaxes = (vehicleCC / 200) * 171;
      } else {
        vehicleTaxes = (vehicleCC / 200) * 345;
      }
    } else if (vehicleType === 'Autocar') {
      vehicleTaxes = (vehicleCC / 200) * 28;
    } else if (vehicleType === 'Alte vehicule') {
      vehicleTaxes = (vehicleCC / 200) * 34;
    } else if (vehicleType === 'Tractor') {
      vehicleTaxes = (vehicleCC / 200) * 22;
    }
  
    alert(
      'Your taxes according to your vehicule type are: ' + vehicleTaxes + ' RON.'
    );
  }
  
  // carTaxesCalc();
  
  function carTaxesCalcV2(vehicleType, vehicleCC) {
    let vehicleTaxes = 0;
  
    if (vehicleType === 'Motocicleta') {
      if (vehicleCC <= 1600) {
        vehicleTaxes = (vehicleCC / 200) * 8;
      } else {
        vehicleTaxes = (vehicleCC / 200) * 9;
      }
    } else if (vehicleType === 'Autoturism') {
      if (vehicleCC <= 1600) {
        vehicleTaxes = (vehicleCC / 200) * 8;
      } else if (vehicleCC <= 2000) {
        vehicleTaxes = (vehicleCC / 200) * 22;
      } else if (vehicleCC <= 2600) {
        vehicleTaxes = (vehicleCC / 200) * 85;
      } else if (vehicleCC <= 3000) {
        vehicleTaxes = (vehicleCC / 200) * 171;
      } else {
        vehicleTaxes = (vehicleCC / 200) * 345;
      }
    } else if (vehicleType === 'Autocar') {
      vehicleTaxes = (vehicleCC / 200) * 28;
    } else if (vehicleType === 'Alte vehicule') {
      vehicleTaxes = (vehicleCC / 200) * 34;
    } else if (vehicleType === 'Tractor') {
      vehicleTaxes = (vehicleCC / 200) * 22;
    }
    return vehicleTaxes;
    // alert(
    //   'Your taxes according to you vehicule type are: ' + vehicleTaxes + ' RON.'
    // );
  }
  
  console.log(carTaxesCalcV2('Autoturism', 2500));
  

document.getElementById("myButton").onclick = function(){

  var typeValue = document.getElementById("vehicleSelect").value;
  console.log(typeValue)

  var CCValue = document.getElementById("vehicleCC").value;
  console.log(CCValue)

  var taxesValue = carTaxesCalcV2(typeValue, CCValue);
  console.log(taxesValue)
  alert('Your taxes according to you vehicule type are: ' + taxesValue + ' RON.')
}
  
  