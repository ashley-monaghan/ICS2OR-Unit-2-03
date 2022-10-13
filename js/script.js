// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("Street-number").value)
  const streetName = document.getElementById("Street-name").value

  // output
  document.getElementById("address").innerHTML =
    "Your street is: " + streetNumber + ", " + streetName + "."
}
