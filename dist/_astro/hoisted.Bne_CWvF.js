import"./ToggleDarkBtn.astro_astro_type_script_index_0_lang.DAnGLcmk.js";import"https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js";import"./Header.astro_astro_type_script_index_0_lang.CD8oHzLf.js";const e=[{imgSrc:"../img/portfolio_img/aluraFlix.webp",titulo:"Alura Flix",skills:["React","StyledComponents"],descripcion:"Final project for the One Oracle Next Education Program. Educational programming video website demonstrating CRUD requests.",demoURL:"https://alura-flix-self.vercel.app/",repoURL:"https://github.com/SofiDevO/alura-flix",anim:"fade-right"},{imgSrc:"../img/portfolio_img/alura_geek.webp",titulo:"Alura Geek",skills:["JavaScript","CSS"],descripcion:" CRUD operations using HTTP requests.",demoURL:"https://alura-geek-ruddy.vercel.app/",repoURL:"https://github.com/SofiDevO/alura-geek",anim:"fade-up"},{imgSrc:"../img/portfolio_img//react_org.webp",titulo:"React ORG",skills:["React","CSS"],descripcion:"React application to manage your team members.",demoURL:"https://react-org-delta.vercel.app/",repoURL:"https://github.com/SofiDevO/react-org",anim:"fade-left"},{imgSrc:"../img/portfolio_img//portfolio.webp",titulo:"My Portfolio",skills:["Astro","React","JavaScript"],descripcion:"Just the repository of my portfolio on GitHub.",demoURL:"https://sofidev-portfolio-astro-delta.vercel.app/",repoURL:"https://github.com/SofiDevO/sofidev-portfolio-astro",anim:"fade-right"},{imgSrc:"../img/portfolio_img/SASS.webp",titulo:"Eco Store",skills:["Sass","JavaScript"],descripcion:"Made with sass for the,Sass fundamentals course",demoURL:"https://sofidevo.github.io/eco-store-sass/",repoURL:"https://github.com/SofiDevO/eco-store-sass",anim:"fade-up"},{imgSrc:"../img/portfolio_img/BooststrapCurso.webp",titulo:"fruto & Fruta",skills:["Bootstrap","JavaScript"],descripcion:"Made with Bootstrap for the, Bootstrap  course",demoURL:"https://sofidevo.github.io/bootstrap-curso/",repoURL:"https://github.com/SofiDevO/bootstrap-curso",anim:"fade-left"},{imgSrc:"../img/portfolio_img//encriptador_mensajes_dark.webp",titulo:"Message Encryptor",skills:["JavaScript","CSS"],descripcion:"Message Encryptor for the first Alura Latam Challenge: Programming Logic.",demoURL:"https://sofidevo.github.io/encriptador-mensajes/",repoURL:"https://github.com/SofiDevO/encriptador-mensajes",anim:"fade-up"}],r={JavaScript:"skill-icons:javascript",React:"skill-icons:react-dark",Astro:"skill-icons:astro",CSS:"skill-icons:css",Sass:"skill-icons:sass",StyledComponents:"skill-icons:styledcomponents",Bootstrap:"devicon:bootstrap"},p=document.querySelectorAll("[data-skill]"),s=document.querySelector(".cards__container"),d=document.querySelector("[data-All]");function l(){const t=e.map(o=>`
        <div class="portafolio__tarjeta" >
            <div class="portafolio__cara faceA card__content caja__dark__portafolio">
                <div class="img__container">
                    <img
                        class="portafolio__img"
                        src="${o.imgSrc}"
                        alt="${o.titulo}"
                    />
                </div>
                <div class="container__info">
                    <h3 class="portafolio__subtitulo titulo__dark">
                        ${o.titulo}
                    </h3>
                    <div class="skills__used">
                        ${o.skills.map(a=>`
                            <div class="tecnology" >
                                <iconify-icon
                                    icon="${r[a]||""}"
                                    width="22"
                                />
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
            <div class="portafolio__cara faceB  caja__dark__portafolio">
                <p class="portafolio__descripcion titulo__dark">
                    ${o.descripcion}
                </p>
                <div class="portafolio__botobnes">
                    <a
                        class="portafolio__btn boton titulo__dark"
                        href="${o.demoURL}"
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                    >
                        <span data-section="portafolio" data-value="demo">
                            View Demo
                        </span>
                    </a>
                    <a
                        class="portafolio__btn boton titulo__dark"
                        href="${o.repoURL}"
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                    >
                        <span data-section="portafolio" data-value="repo">
                            View Repo
                        </span>
                    </a>
                </div>
            </div>
        </div>
    `).join("");s.innerHTML=t}l();p.forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-skill"),c=e.filter(i=>i.skills.includes(o)).map(i=>`
          <div class="portafolio__tarjeta" >
              <div class="portafolio__cara faceA card__content caja__dark__portafolio">
                  <div class="img__container">
                      <img
                          class="portafolio__img"
                          src="${i.imgSrc}"
                          alt="${i.titulo}"
                      />
                  </div>
                  <div class="container__info">
                      <h3 class="portafolio__subtitulo titulo__dark">
                          ${i.titulo}
                      </h3>
                      <div class="skills__used">
                          ${i.skills.map(n=>`
                              <div class="tecnology" >
                                  <iconify-icon
                                      icon="${r[n]||""}"
                                      width="22"
                                  />
                              </div>
                          `).join("")}
                      </div>
                  </div>
              </div>
              <div class="portafolio__cara faceB  caja__dark__portafolio">
                  <p class="portafolio__descripcion titulo__dark">
                      ${i.descripcion}
                  </p>
                  <div class="portafolio__botobnes">
                      <a
                          class="portafolio__btn boton titulo__dark"
                          href="${i.demoURL}"
                          target="_blank"
                          rel="nofollow noreferrer noopener"
                      >
                          <span data-section="portafolio" data-value="demo">
                              View Demo
                          </span>
                      </a>
                      <a
                          class="portafolio__btn boton titulo__dark"
                          href="${i.repoURL}"
                          target="_blank"
                          rel="nofollow noreferrer noopener"
                      >
                          <span data-section="portafolio" data-value="repo">
                              View Repo
                          </span>
                      </a>
                  </div>
              </div>
          </div>
      `).join("");s.innerHTML=c})});d.addEventListener("click",()=>{l()});
