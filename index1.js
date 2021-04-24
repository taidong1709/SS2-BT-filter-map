let age = +prompt("Nhập độ tuổi cần tìm?");

let matched = student
    .filter(học_sinh => học_sinh.age === age)
    .map(học_sinh => học_sinh.name);

document.body.innerHTML = matched.length ? `
<ul>
    ${matched.map(tên_học_sinh => `<li>${tên_học_sinh}</li>`).join("")}
</ul>
` : "Không có học sinh có độ tuổi theo yêu cầu!"
