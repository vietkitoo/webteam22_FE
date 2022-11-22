let items = document.querySelectorAll('.slide1.carousel .slide1.carousel-item')
		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            next = items[0]
        }
        console.log('111')
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})