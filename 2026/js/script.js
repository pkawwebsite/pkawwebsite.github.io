function load_org_imgs() {
    let supportflag = false;
    window.addEventListener('scroll', function () {
        const supportingOrg = document.getElementById('supporting-organization');

        if (supportingOrg && !supportflag) {
            const rect = supportingOrg.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight - 100) {
                supportflag = true;
                const images = Array.from(supportingOrg.querySelectorAll('img'));

                for (let i = images.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [images[i], images[j]] = [images[j], images[i]];
                }

                images.forEach(function (img) {
                    setTimeout(function () {
                        img.classList.add('animate__animated', 'animate__fadeIn');
                    }, Math.random() * 1500);
                });
            }
        }
    });
}


function loadComponent(id, url) {
    const targetElement = document.getElementById(id);
    if (!targetElement) {
        return Promise.resolve();
    }

    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

function modifySectionBG() {
    const sections = document.querySelectorAll('section');
    let i = 1;
    sections.forEach(function (section) {
        if (i % 2 === 0) {
            section.classList.add('bg-color');
        }

        const chairs = section.querySelectorAll('.committee-chair');
        chairs.forEach(function (chair) {
            if (i % 2 === 1) {
                chair.classList.add('bg-color');
            } else {
                chair.classList.add('bg-color-light');
            }

        });
        i++;
    });

}

// function navbar() {
//     const nabbutton = document.querySelector('.nav-button');
//     const navLinks = document.querySelector('.nav-links');

//     nabbutton.addEventListener('click', function () {
//         nabbutton.classList.toggle('active');
//         navLinks.classList.toggle('active');
//     });

//     const dropdowns = document.querySelectorAll('.dropdown');
//     for (let target of dropdowns) {
//         target.addEventListener('click', function () {
//             const isActive = target.classList.contains('active');
//             for (let t of dropdowns) {
//                 if (t !== target) {
//                     t.classList.remove('active');
//                 }
//             }
//             target.classList.toggle('active', !isActive);
//         });
//     }
// }

function navbar() {
    const navButton = document.querySelector('.nav-button');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    const activeElements = [navButton, navLinks, ...dropdowns];

    navButton.addEventListener('click', function (e) {
        e.stopPropagation();
        navButton.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    dropdowns.forEach(target => {
        target.addEventListener('click', function (e) {
            e.stopPropagation();
            const isActive = target.classList.contains('active');
            dropdowns.forEach(t => {
                if (t !== target) t.classList.remove('active');
            });
            target.classList.toggle('active', !isActive);
        });
    });

    document.addEventListener('click', function () {
        removeAllActive();
    });


    // const navItems = document.querySelector('.nav-links');
    // navItems.addEventListener('mouseleave', function () {
    //     removeAllActive();
    // });
    // navItems.forEach(function (navItem) {
    //     navItem.addEventListener('mouseleave', function () {
    //         removeAllActive();
    //     });
    // });

    function removeAllActive() {
        activeElements.forEach(el => {
            if (el) el.classList.remove('active');
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            removeAllActive();
        }
    });
}

function debounce(func, delay = 100) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

function checkSectionVisibility() {
    const sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight * 0.9) {
            section.classList.add('visible');
        }
        else {
            section.classList.remove('visible');
        }
    });
}

function loading_complete() {
    document.addEventListener('touchstart', function () { }, false);
    const loaderPage = document.querySelector('#loading-page');
    const banner = document.querySelector('#banner');
    const nav = document.querySelector('nav');
    const header = document.querySelector('#header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const main_banner = document.querySelector('#banner-title');
    const main_banner_left = document.querySelector('.banner-title-left');
    const main_banner_name = document.querySelector('.banner-title-line-name');
    const main_banner_loc = document.querySelector('.banner-title-line-loc');
    const main_banner_date = document.querySelector('.banner-title-line-date');
    const titleElement = document.querySelector('title');
    titleElement.textContent = "PKAW 2026";

    if (loaderPage) loaderPage.style.opacity = 0;

    if (!loaderPage) {
        showPageElements();
        return;
    }

    function handleLoaderTransitionEnd(e) {
        if (e.propertyName !== 'opacity') return;
        loaderPage.removeEventListener('transitionend', handleLoaderTransitionEnd);
        loaderPage.style.display = 'none';
        document.querySelector('html').style.overflowY = 'auto';
        setTimeout(() => {
            if (banner) banner.style.opacity = 1;
            if (nav) nav.style.opacity = 1;
            if (header) header.style.opacity = 1;
            // if (nav) nav.style.opacity = 1;
            // if (header) header.style.opacity = 1;
            
            // if (main_banner) main_banner.style.opacity = 1;
        }, 500);

        setTimeout(() => {
            // if (banner) banner.style.opacity = 1;
            
            // if (main) main.style.opacity = 1;
            // if (footer) footer.style.opacity = 1;
            if (main) main.style.opacity = 1;
            if (footer) footer.style.opacity = 1;
            if (main_banner) main_banner.style.opacity = 1;
        }, 1000);

        setTimeout(() => {
            if (main_banner_left) {
                main_banner_left.style.opacity = 1;
                main_banner_left.style.left = 0;
            }
        }, 1500);
        setTimeout(() => {
            if (main_banner_name) {
                main_banner_name.style.opacity = 1;
                main_banner_name.style.right = 0;
            }
        }, 2500);
        setTimeout(() => {
            if (main_banner_loc) {
                main_banner_loc.style.opacity = 1;
                main_banner_loc.style.bottom = 0;
            }
        }, 3500);
        setTimeout(() => {
            if (main_banner_date) {
                main_banner_date.style.opacity = 1;
                main_banner_date.style.bottom = 0;
            }
        }, 4500);
    }

    loaderPage.addEventListener('transitionend', handleLoaderTransitionEnd);
    loaderPage.style.opacity = 0;
}



document.addEventListener('DOMContentLoaded', async function () {
    const componentPromises = [
        loadComponent('navbar', './components/navbar.html').then(function () {
            navbar();
        }),
        loadComponent('header', './components/header.html').then(function () {
            const header = document.querySelector('#header');
            if (!header) {
                return;
            }
            const target = document.querySelector('#header-title h1');
            if (target) {
                target.textContent = header.dataset.value;
            }
        }),
        loadComponent('footer', './components/footer.html')
    ];

    try {
        await Promise.all(componentPromises);

        modifySectionBG();
        load_org_imgs();
        checkSectionVisibility();
        window.addEventListener('load', checkSectionVisibility);
        window.addEventListener('scroll', checkSectionVisibility);

        loading_complete();
    } catch (error) {
        console.error('Loading error:', error);
        loading_complete();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const goTopBtn = document.getElementById('go-top-btn');

    function handleScroll() {
        const scroH = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        if (scroH > 500) {
            goTopBtn.style.opacity = "1";
        } else {
            goTopBtn.style.opacity = "0";
        }

    }
    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (!('scrollBehavior' in document.documentElement.style)) {
            let currentTop = window.pageYOffset;
            const step = () => {
                currentTop = currentTop - Math.max(1, currentTop / 10);
                window.scrollTo(0, currentTop);
                if (currentTop > 0) requestAnimationFrame(step);
            };
            step();
        }
    }

    let scrollTimer;
    window.addEventListener('scroll', function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(handleScroll, 10);
    });

    if (goTopBtn) {
        goTopBtn.addEventListener('click', scrollToTop);
    }
});