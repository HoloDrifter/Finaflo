
      document.addEventListener("DOMContentLoaded", function () {
        const accordionHeaders = document.querySelectorAll(".accordion-header");

        accordionHeaders.forEach((header) => {
          header.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Toggle max-height for smooth opening/closing
            if (content.style.maxHeight) {
              content.style.maxHeight = null;
              header.querySelector("span i").style.transform = "rotate(0deg)";
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
              header.querySelector("span i").style.transform = "rotate(45deg)";
            }
          });
        });
      });
