// 1-vazifa: Yoshni aniqlash
let yosh = Number(prompt("Yoshingizni kiriting:"));

if (yosh >= 18) {
  alert("Siz voyaga yetgansiz");
} else {
  alert("Siz hali voyaga yetmagansiz");
}

// 2-vazifa: Juft yoki toqlik
let son = Number(prompt("Son kiriting:"));

if (son % 2 === 0) {
  alert("Juft son");
} else {
  alert("Toq son");
}

// 3-vazifa: Kalkulyator
let son1 = Number(prompt("1-sonni kiriting:"));
let son2 = Number(prompt("2-sonni kiriting:"));

alert(
  "Yig'indisi: " + (son1 + son2) + "\n" +
  "Ayirmasi: " + (son1 - son2) + "\n" +
  "Ko'paytmasi: " + (son1 * son2) + "\n" +
  "Bo'linmasi: " + (son1 / son2)
);

// 4-vazifa: Ism bilan ishlash
let ism = prompt("Ismingizni kiriting:");

alert("Katta harflarda: " + ism.toUpperCase());
alert("Ismingizdagi harflar: " + ism.length);
alert("Birinchi harfi: " + ism[0]);

// 5-vazifa: Object yaratish
let student = {
  name: "Ali",
  age: 16,
  course: "Frontend",
  isActive: true
};

console.log(student);