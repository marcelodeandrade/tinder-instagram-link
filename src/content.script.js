(browser => {
	"use strict";

	let hasLink = false

	setInterval(() => {

		const profileCard = document.querySelector(".profileCard__bio")

		if (profileCard) {

			const regex = /@([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\\.(?!\\.))){0,28}(?:[A-Za-z0-9_]))?)/g;
			const username = profileCard.textContent.match(regex)

			if (username && !hasLink) {

				const linkText = document.createTextNode(username[0])
				const a = document.createElement('a')
				a.appendChild(linkText)
				a.title = username[0]
				a.href = `https://www.instagram.com/${username[0].replace("@", "")}`
				a.target = `_BLANK`

				profileCard.appendChild(a)

				hasLink = true
			}
		}

	}, 2000);

})(chrome||browser);