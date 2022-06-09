import React from "react";

const formatPrice = (price) => {
  return `KZT. ${price}.00`;
};

const currentDate = (date1) => {
  var today = new Date(date1);
  var date =
    today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
  return date;
};

const currentDay = () => {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  var today = new Date();
  var currentDay = today.getDay();
  return days[currentDay];
};
export { formatPrice, currentDate, currentDay };
