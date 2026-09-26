/* =========================================================
   MAHDI MAHMOUDI PORTFOLIO
   script.js

   این فایل امکانات تعاملی سایت را کنترل می‌کند:
   - منوی همبرگری
   - مودال‌ها
   - نمونه‌کارها
   - دانلود و اشتراک‌گذاری
   - FAQ
   - تغییر زبان فارسی / انگلیسی
   - ذخیره زبان در مرورگر
   - Reveal هنگام اسکرول
   - Back To Top
   - بستن همه پنجره‌ها با Escape
   ========================================================= */


/* =========================================================
   START
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const body = document.body;

    const drawer = document.getElementById("drawer");
    const drawerOverlay = document.getElementById("drawerOverlay");

    const openDrawerButton = document.getElementById("openDrawer");
    const closeDrawerButton = document.getElementById("closeDrawer");

    const backTop = document.getElementById("backTop");

    const yearElement = document.getElementById("year");

    const languageButton =
        document.getElementById("languageButton");

    const languageText =
        document.getElementById("languageText");

    const openAboutButton =
        document.getElementById("openAbout");

    const openAboutMenuButton =
        document.getElementById("openAboutFromMenu");

    const openFaqMenuButton =
        document.getElementById("openFaqFromMenu");

    const floatingFaq =
        document.getElementById("floatingFaq");

    const openMoreButton =
        document.getElementById("openMore");


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       DRAWER / MENU
       ===================================================== */

    function openDrawer() {

        if (!drawer || !drawerOverlay) return;

        drawer.classList.add("active");

        drawerOverlay.classList.add("active");

        body.classList.add("no-scroll");

    }


    function closeDrawer() {

        if (!drawer || !drawerOverlay) return;

        drawer.classList.remove("active");

        drawerOverlay.classList.remove("active");

        body.classList.remove("no-scroll");

    }


    if (openDrawerButton) {

        openDrawerButton.addEventListener(
            "click",
            openDrawer
        );

    }


    if (closeDrawerButton) {

        closeDrawerButton.addEventListener(
            "click",
            closeDrawer
        );

    }


    if (drawerOverlay) {

        drawerOverlay.addEventListener(
            "click",
            closeDrawer
        );

    }


    /* =====================================================
       CLOSE DRAWER AFTER CLICKING A LINK
       ===================================================== */

    const drawerLinks =
        document.querySelectorAll(".drawer a");


    drawerLinks.forEach(link => {

        link.addEventListener("click", () => {

            closeDrawer();

        });

    });


    /* =====================================================
       MODAL SYSTEM
       =====================================================

       نکته مهم:
       در این سیستم فقط یک مودال اصلی در هر لحظه باز می‌شود.

       بنابراین مشکل:
       «مودال بزرگ‌نمایی روی مودال نمونه‌کارهای بیشتر»
       برطرف شده است.
       ===================================================== */


    const allModals =
        document.querySelectorAll(".modal");


    function closeAllModals() {

        allModals.forEach(modal => {

            modal.classList.remove("active");

        });

        body.classList.remove("no-scroll");

    }


    function openModal(modal) {

        if (!modal) return;


        /*
        ابتدا همه مودال‌های قبلی بسته می‌شوند.
        */

        closeAllModals();


        /*
        سپس فقط مودال موردنظر باز می‌شود.
        */

        modal.classList.add("active");

        body.classList.add("no-scroll");

    }


    function closeModal(modal) {

        if (!modal) return;

        modal.classList.remove("active");

        body.classList.remove("no-scroll");

    }


    /* =====================================================
       MODAL CLOSE BUTTONS
       ===================================================== */

    const modalCloseButtons =
        document.querySelectorAll("[data-close]");


    modalCloseButtons.forEach(button => {

        button.addEventListener("click", () => {

            const modalId =
                button.getAttribute("data-close");

            const modal =
                document.getElementById(modalId);

            closeModal(modal);

        });

    });


    /* =====================================================
       CLOSE MODAL BY CLICKING OUTSIDE
       ===================================================== */

    allModals.forEach(modal => {

        modal.addEventListener("click", event => {

            /*
            اگر مستقیماً روی پس‌زمینه مودال کلیک شود
            مودال بسته می‌شود.
            */

            if (event.target === modal) {

                closeModal(modal);

            }

        });

    });


    /* =====================================================
       ABOUT MODAL
       ===================================================== */

    const aboutModal =
        document.getElementById("aboutModal");


    function openAboutModal() {

        openModal(aboutModal);

    }


    if (openAboutButton) {

        openAboutButton.addEventListener(
            "click",
            openAboutModal
        );

    }


    if (openAboutMenuButton) {

        openAboutMenuButton.addEventListener(
            "click",
            () => {

                closeDrawer();

                setTimeout(() => {

                    openAboutModal();

                }, 150);

            }
        );

    }


    /* =====================================================
       FAQ MODAL
       ===================================================== */

    const faqModal =
        document.getElementById("faqModal");


    function openFaqModal() {

        openModal(faqModal);

    }


    if (openFaqMenuButton) {

        openFaqMenuButton.addEventListener(
            "click",
            () => {

                closeDrawer();

                setTimeout(() => {

                    openFaqModal();

                }, 150);

            }
        );

    }


    if (floatingFaq) {

        floatingFaq.addEventListener(
            "click",
            event => {

                event.preventDefault();

                openFaqModal();

            }
        );

    }


    /* =====================================================
       MORE PORTFOLIO MODAL
       ===================================================== */

    const moreModal =
        document.getElementById("moreModal");


    if (openMoreButton) {

        openMoreButton.addEventListener(
            "click",
            () => {

                openModal(moreModal);

            }
        );

    }


    /* =====================================================
       IMAGE MODAL
       ===================================================== */

    const imageModal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    const downloadImage =
        document.getElementById("downloadImage");

    const shareImage =
        document.getElementById("shareImage");


    let currentImage =
        "";


    /* =====================================================
       OPEN IMAGE
       ===================================================== */

    function openImage(imagePath, title = "") {

        if (!imagePath || !modalImage) return;


        /*
        مهم:
        قبل از باز کردن تصویر،
        مودال‌های دیگر بسته می‌شوند.
        */

        closeAllModals();


        currentImage =
            imagePath;


        modalImage.src =
            imagePath;


        modalImage.alt =
            title || "Portfolio";


        /*
        لینک دانلود
        */

        if (downloadImage) {

            downloadImage.href =
                imagePath;

            downloadImage.setAttribute(
                "download",
                getFileName(imagePath)
            );

        }


        /*
        باز کردن مودال تصویر
        */

        imageModal.classList.add("active");

        body.classList.add("no-scroll");

    }


    /* =====================================================
       GET FILE NAME
       ===================================================== */

    function getFileName(path) {

        return path
            .split("/")
            .pop()
            .split("?")[0];

    }


    /* =====================================================
       MAIN PORTFOLIO
       ===================================================== */

    const portfolioItems =
        document.querySelectorAll(
            ".portfolio-item"
        );


    portfolioItems.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                const image =
                    item.getAttribute("data-image");

                const title =
                    item.getAttribute("data-title");

                openImage(
                    image,
                    title
                );

            }
        );

    });


    /* =====================================================
       MORE PORTFOLIO
       ===================================================== */

    const moreItems =
        document.querySelectorAll(
            ".more-item"
        );


    moreItems.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                const image =
                    item.getAttribute("data-image");


                /*
                اینجا ابتدا مودال «بیشتر» بسته می‌شود
                و سپس مودال تصویر باز می‌شود.

                بنابراین مودال‌ها روی هم نمی‌افتند.
                */

                closeModal(moreModal);


                setTimeout(() => {

                    openImage(
                        image,
                        "Portfolio"
                    );

                }, 120);

            }
        );

    });


    /* =====================================================
       IMAGE SHARE
       ===================================================== */

    if (shareImage) {

        shareImage.addEventListener(
            "click",
            async () => {

                if (!currentImage) return;


                /*
                اگر مرورگر Web Share را پشتیبانی کند
                */

                if (
                    navigator.share
                ) {

                    try {

                        await navigator.share({

                            title:
                                "مهدی محمودی | نمونه‌کار",

                            text:
                                "مشاهده نمونه‌کار مهدی محمودی",

                            url:
                                window.location.href

                        });

                    }

                    catch (error) {

                        /*
                        کاربر ممکن است پنجره Share
                        را بسته باشد؛ در این حالت
                        خطایی نمایش داده نمی‌شود.
                        */

                    }

                    return;

                }


                /*
                اگر Web Share وجود نداشته باشد،
                لینک صفحه کپی می‌شود.
                */

                try {

                    await navigator.clipboard.writeText(
                        window.location.href
                    );

                    showTemporaryMessage(
                        "لینک صفحه کپی شد"
                    );

                }

                catch (error) {

                    showTemporaryMessage(
                        "امکان اشتراک‌گذاری وجود ندارد"
                    );

                }

            }
        );

    }


    /* =====================================================
       TEMPORARY MESSAGE
       ===================================================== */

    function showTemporaryMessage(message) {

        const oldMessage =
            document.querySelector(
                ".temporary-message"
            );


        if (oldMessage) {

            oldMessage.remove();

        }


        const messageElement =
            document.createElement("div");


        messageElement.className =
            "temporary-message";


        messageElement.textContent =
            message;


        /*
        استایل پیام بدون نیاز به تغییر CSS
        */

        messageElement.style.position =
            "fixed";

        messageElement.style.left =
            "50%";

        messageElement.style.bottom =
            "100px";

        messageElement.style.transform =
            "translateX(-50%)";

        messageElement.style.zIndex =
            "9999";

        messageElement.style.padding =
            "12px 20px";

        messageElement.style.borderRadius =
            "14px";

        messageElement.style.background =
            "rgba(20,20,25,.95)";

        messageElement.style.color =
            "#fff";

        messageElement.style.border =
            "1px solid rgba(255,255,255,.15)";

        messageElement.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.4)";


        document.body.appendChild(
            messageElement
        );


        setTimeout(() => {

            messageElement.remove();

        }, 2200);

    }


    /* =====================================================
       FAQ ACCORDION
       ===================================================== */

    const faqQuestions =
        document.querySelectorAll(
            ".faq-question"
        );


    faqQuestions.forEach(question => {

        question.addEventListener(
            "click",
            () => {

                const currentItem =
                    question.closest(
                        ".faq-item"
                    );


                /*
                بستن سوال‌های دیگر
                */

                document
                    .querySelectorAll(".faq-item")
                    .forEach(item => {

                        if (
                            item !== currentItem
                        ) {

                            item.classList.remove(
                                "active"
                            );

                        }

                    });


                /*
                باز / بسته کردن سوال فعلی
                */

                currentItem.classList.toggle(
                    "active"
                );

            }
        );

    });


    /* =====================================================
       ESC KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeDrawer();

                closeAllModals();

            }

        }
    );


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    function updateBackTop() {

        if (!backTop) return;


        if (
            window.scrollY > 500
        ) {

            backTop.classList.add(
                "show"
            );

        }

        else {

            backTop.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackTop,
        {
            passive: true
        }
    );


    if (backTop) {

        backTop.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    updateBackTop();


    /* =====================================================
       REVEAL ON SCROLL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver"
        in window
    ) {


        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                /*
                                بعد از نمایش،
                                دیگر لازم نیست Observer
                                آن را بررسی کند.
                                */

                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {

                    threshold: 0.12

                }
            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    }

    else {

        /*
        مرورگرهای قدیمی
        */

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       LANGUAGE SYSTEM
       =====================================================

       زبان انتخاب‌شده داخل LocalStorage ذخیره می‌شود.

       کلید ذخیره:
       mahdiPortfolioLanguage
       ===================================================== */


    const translations = {


        fa: {

            brand:
                "مهدی محمودی",

            menu:
                "منو",

            home:
                "خانه",

            about:
                "درباره من",

            portfolio:
                "نمونه‌کارها",

            order:
                "سفارش طراحی",

            moreAbout:
                "اطلاعات بیشتر",

            faq:
                "سوالات متداول",

            hello:
                "مهدی محمودی",

            tagline:
                "خلاقیت در قالب تصویر",

            heroDescription:
                "طراح گرافیک و تصویرساز دیجیتال؛ خلق طرح‌های حرفه‌ای برای برندها، شبکه‌های اجتماعی و پروژه‌های شخصی.",

            orderDesign:
                "سفارش طراحی",

            viewPortfolio:
                "مشاهده نمونه‌کارها",

            years:
                "سال تجربه",

            projects:
                "پروژه انجام‌شده",

            satisfaction:
                "تمرکز روی کیفیت",

            aboutLabel:
                "درباره من",

            aboutTitle:
                "طراحی برای دیده‌شدن",

            aboutSubtitle:
                "ترکیب خلاقیت، تصویر و جزئیات",

            aboutShortTitle:
                "سلام، من مهدی هستم",

            aboutShort:
                "من در زمینه طراحی گرافیک و تصویرسازی دیجیتال فعالیت می‌کنم و تلاش می‌کنم برای هر پروژه یک ظاهر متفاوت و حرفه‌ای ایجاد کنم.",

            readMore:
                "بیشتر",

            portfolioLabel:
                                
