///////////////////////////////////////////////////// GET IMAGE PROPORTIONS /////////////////////////////////////////////////////
// Get proportion
function getImageProportions(x) {
    let getImgWidth, getImgHeight
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    // IMAGE WIDTH
    let ImagePopWidth = x.tagName === 'IMG' ? x.naturalWidth : x.getAttribute('data-width');
    // IMAGE HEIGHT
    let ImagePopHeight = x.tagName === 'IMG' ? x.naturalHeight : x.getAttribute('data-height');
    // IMAGE PROPORTION
    let imageProportion = ImagePopHeight / ImagePopWidth;

    ImagePopWidth = winWidth;
    ImagePopHeight = ImagePopWidth * imageProportion;
    getImgWidth = ImagePopWidth - 120;
    getImgHeight = ImagePopHeight - 120 * imageProportion;

    // START IF
    if (ImagePopWidth > winWidth) { // WIDTH
        ImagePopWidth = winWidth;
        ImagePopHeight = ImagePopWidth * imageProportion;
        igetImgWidth = ImagePopWidth - 120;
        getImgHeight = ImagePopHeight - 120 * imageProportion;
    } else if (ImagePopHeight > winHeight) { // HEIGHT
        ImagePopHeight = winHeight;
        ImagePopWidth = ImagePopHeight / imageProportion;
        getImgHeight = ImagePopHeight - 90;
        getImgWidth = ImagePopWidth - 90 / imageProportion;
    }

    let obj = {
        width: getImgWidth,
        height: getImgHeight
    }
    return obj;
}


///////////////// GALLERY /////////////////
let FgGallery = function() {
    let This = this;
    // main container
    this.fgContainer = document.querySelector(arguments[0]);
    // gallery setup
    this.setup = arguments[1]
    this.setup && this.setup.cols ? this.fgContainer.classList.add(`cols-${this.setup.cols}`) : false;
    // gallery images
    this.items = this.fgContainer.querySelectorAll('img');
    // items length
    this.itemsLength = this.items.length;

    // create gallery data
    this.galleryData = document.createElement('div');
    this.galleryData.classList.add('gallery-data');
    document.body.appendChild(this.galleryData);

    // current image index
    this.current = 0;

    // create next, previous buttons & close
    this.nextBtn = document.createElement('div');
    this.nextBtn.classList.add('next-btn', 'gallery-arrow')
    this.galleryData.appendChild(this.nextBtn);
    this.nextBtn.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 	 viewBox="0 0 492.004 492.004"  xml:space="preserve"> <g> 	<g> 		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/> 	</g> </g> </svg>'

    this.prevBtn = document.createElement('div');
    this.prevBtn.classList.add('prev-btn', 'gallery-arrow')
    this.galleryData.appendChild(this.prevBtn);
    this.prevBtn.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 	viewBox="0 0 451.847 451.847" 	 xml:space="preserve"> <g> 	<path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 		c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 		c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"/> </g> </svg>'

    this.closeBtn = document.createElement('div');
    this.closeBtn.classList.add('close-btn');
    this.closeBtn.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 	viewBox="0 0 348.333 348.334"  xml:space="preserve"> <g> 	<path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/> </g> </svg>';
    this.galleryData.insertBefore(this.closeBtn, this.galleryData.childNodes[0]);

    // create function
    this.createFunc();

    // next image
    this.nextBtn.addEventListener('click', function() {
        This.galNextFunc();
    });

    // previous image
    this.prevBtn.addEventListener('click', function() {
        This.galPrevFunc();
    });

    // close image //// close functions
    this.closeBtn.addEventListener('click', function() {
        This.galleryData.classList.remove('active');
        This.galleryData.querySelectorAll('.data-items').forEach((openItems) => {
            openItems.classList.remove('active');
        });
    });
    this.galleryCloseFunc(function() {
        This.galleryData.classList.remove('active');
        This.galleryData.querySelectorAll('.data-items').forEach((openItems) => {
            openItems.classList.remove('active');
        });
    });
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 39) {
            This.galNextFunc();
        }
        if (e.keyCode === 37) {
            This.galPrevFunc();
        }
        if (e.keyCode === 27) {
            This.galleryData.classList.remove('active');
            This.galleryData.querySelectorAll('.data-items').forEach((openItems) => {
                openItems.classList.remove('active');
            });
        }
    })
}




// dependences creation
FgGallery.prototype.createFunc = function() {
    let This = this;
    let isTure = this.items[0].nextElementSibling !== null || undefined ? false : true;
    this.items.forEach(function(items, i) {
        // create containers for images
        let divItems = isTure ? items.parentElement : document.createElement('div');
        // add manual height
        This.setup && This.setup.height ? divItems.style.height = `${This.setup.height}px` : false;

        // styles setup
        if (This.setup && This.setup.style) {
            for (const key in This.setup.style) {
                divItems.style[key] = "" + This.setup.style[key];
            }
        }


        // console.log('items:',items);

        // add class
        divItems.classList.add('gallery-items')
        // append items
        divItems.appendChild(items);
        This.fgContainer.appendChild(divItems);
        // create gallery data items
        let dataItems = document.createElement('div')
        dataItems.classList.add('data-items');
        This.galleryData.appendChild(dataItems);

        let inter = setInterval(function() {
            if (getImageProportions(items).width && getImageProportions(items).height) {
                clearInterval(inter)
                dataItems.innerHTML += `<div data-sequence="${i}" style="width:${getImageProportions(items).width + 20}px; height:${getImageProportions(items).height + 20}px;" class="item-border"><img style="width: ${getImageProportions(items).width}px; height: ${getImageProportions(items).height}px;" src="${items.src}" /></div>`;

                // change dimensions on resize
                window.onresize = function() {
                    for (let ii = 0; ii < This.itemsLength; ii++) {
                        let imgCont = document.querySelectorAll('.item-border')[ii];

                        imgCont.style.height = getImageProportions(This.items[ii]).height + 20 + 'px';
                        imgCont.querySelector('img').style.height = getImageProportions(This.items[ii]).height + 'px';

                        imgCont.style.width = getImageProportions(This.items[ii]).width + 20 + 'px';
                        imgCont.querySelector('img').style.width = getImageProportions(This.items[ii]).width + 'px';
                    }
                }

            }
        }, 10);

        let interval = setInterval(function() {
            // create image data with image sizes
            if (document.querySelectorAll('.item-border img')[i]) {
                clearInterval(interval);
                divItems.style.background = `url('${items.src}') no-repeat center center / cover`;
                items.parentElement.removeChild(items);
            }
        }, 10);

        // event listener
        divItems.addEventListener('click', function(e) {
            e.preventDefault();
            This.current = i;
            This.galSlide(i);
        })
    })
}

// NEXT FUNCTION
FgGallery.prototype.galNextFunc = function() {
    (this.current === this.itemsLength - 1) ? this.current = 0: this.current += 1;
    this.galSlide(this.current);
}

// PREVIOUS FUNCTION
FgGallery.prototype.galPrevFunc = function() {
    (this.current === 0) ? this.current = this.itemsLength - 1: this.current -= 1;
    this.galSlide(this.current);
}

// SELECT IMAGE & NONE OTHERS
FgGallery.prototype.galSlide = function(index) {
    let This = this;
    if (index >= 0 && index <= this.itemsLength) {
        for (let i = 0; i < this.itemsLength; i++) {
            if (i === index) {
                This.galleryData.classList.add('active');
                This.galleryData.querySelectorAll('.data-items')[i].classList.add('active');
            } else {
                This.galleryData.querySelectorAll('.data-items')[i].classList.remove('active');
            }
        }
    }
}

// GALLERY CLOSE FUNCTION
FgGallery.prototype.galleryCloseFunc = function(callback) {
    let nm = 0;
    document.addEventListener('click', function(ev) {
        nm++;
        if (ev.target.className === 'data-items' || ev.target.className === 'data-items active' && nm > 1) {
            callback();
            nm = 0;
        }
    });
}





var david = (function($) {

    $(document).ready(function() {
        var view = (function() {
            return {
                galItems: $('.gallery-items'),
            }
        })()

        var funcs = (function(v) {
            console.log(v.galItems);
        })(view)

        return {
            view: view,
            funcs: funcs
        }
    })


})(jQuery)