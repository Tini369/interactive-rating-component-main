function myFunction() {
	document.getElementById("c2").classList.toggle("show")
	document.getElementById("c1").classList.toggle("hide")
}
	const rating = document.getElementById("selected")
	const rates = document.querySelectorAll(".btn")

	rates.forEach((rate) =>{
		rate.addEventListener("click", () => {
			rating.innerHTML = rate.innerHTML
		})
	})