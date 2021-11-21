<template>
    <banner class="banner-opacity" :banners="banners"/>
    <div class="corpo">
        <div class="conteudo">
            <card title="Teste" description="Eu estou so testando" color="white" backgroundColor="black" />
        </div>
        <div class="rodape">

        </div>
    </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import Card from "@/components/Card.vue"
export default {
    components: { Banner, Card },
    data: () => {
        return {
            banners: [
                {
                    id: 1,
                    src: "https://blog.superbid.net/wp-content/uploads/2021/08/Joias-Raras-Aneis-gargantilhas-dedeiras-e-diversas-outras-joias-no-marketplace-da-Superbid.jpg.jpg",
                    descricao: "Joia Linda de se ver 1",
                },
                {
                    id: 2,
                    src: "https://img.freepik.com/fotos-gratis/colecao-moderna-de-pulseira-e-aneis-de-forma-de-arco-dourado-na-plataforma-de-cilindros-brancos_112112-277.jpg?size=626&ext=jpg",
                    descricao: "Joia Linda de se ver 2",
                },
                {
                    id: 3,
                    src: "https://http2.mlstatic.com/D_NQ_NP_765338-MLB29029901429_122018-O.jpg",
                    descricao: "Joia Linda de se ver 3",
                },
                {
                    id: 4,
                    src: "https://http2.mlstatic.com/D_NQ_NP_843026-MLB31255400110_062019-O.jpg",
                    descricao: "Joia Linda de se ver 4",
                },
            ]
        }
    },
    mounted () {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll: function () {
            let navbar = window.document.getElementsByClassName('navbar')[0]
            let perc = window.scrollY * 0.002
            let percCalc = 1 - perc
            document.documentElement.style.setProperty("--opacity-banner", percCalc)
            if (percCalc <= 0.3) {
                navbar.classList.add("nav-opacity");
            } else {
                navbar.classList.remove("nav-opacity");
            }
        }
    }
}
</script>
<style lang="scss">
    .banner-opacity {
        opacity: var(--opacity-banner, $opacity-banner);
    }
    .corpo {
        z-index: 0;
        background-color: white;
        position: absolute;
        top: 33.2rem;
        height: 6000px;
        width: 100%;
    }
</style>