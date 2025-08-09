const footer = document.getElementById("footer");

const createFooter = () => {
    const footerEl = `
                    <div class="content has-text-centered">
                          <p>
                              <strong>Developed by Juno, Guilherme and Nicolas.</strong>
                              The source code is licensed
                              <a href="https://opensource.org/license/mit">MIT</a>.
                          </p>
                    </div> <!-- fim 'content' -->
                    `
    footer.insertAdjacentHTML("beforeend", footerEl);

    return footerEl;
}

createFooter();