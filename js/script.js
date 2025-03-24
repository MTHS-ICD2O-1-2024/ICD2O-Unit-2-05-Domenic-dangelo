// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates wage.
 */
function calculateWage() {
  // input
  const hoursWorked = parseFloat(document.getElementById("hours-worked").value)
  const hourlyWage = parseFloat(document.getElementById("hourly-wage").value)
  const INCOME_TAX = 0.18

  // process
  const taxedSalary = (hoursWorked * hourlyWage) * (1.00 - INCOME_TAX)
  const taxDeduction = (hoursWorked * hourlyWage) * INCOME_TAX

  // output
  document.getElementById('answer').innerHTML = 
    'Your pay will be: $' + taxedSalary.toFixed(2) + "."
  document.getElementById('taxes').innerHTML = 
    'the government will take: $' + taxDeduction.toFixed(2) + "."
}
