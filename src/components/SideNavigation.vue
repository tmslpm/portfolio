<script setup lang="ts">
import { ref } from 'vue';
import { Routes } from "@/router/Routes";
import SwitchTheme from "@/components/SwitchTheme.vue";

//defineProps(['titleSummary'])

const sidebar = ref<HTMLElement>();
const minimizeSidebar = ref(true);
const onMinimizeSidebar = () => minimizeSidebar.value = !minimizeSidebar.value;

const isSideNavClose = ref(true);
const onCloseSidebar = () => isSideNavClose.value = !isSideNavClose.value;

</script>

<template>
    <nav ref="sidebar"
        :class="{ hasMinimizedProcess: minimizeSidebar, isClosed: isSideNavClose }">

        <a href="javascript:void(0)"
            class="parentMobileOpenCloseIcon"
            @click="onCloseSidebar">
            <i class="material-symbols-outlined mobileOpenCloseIcon">
                {{ isSideNavClose ? "menu_open" : "close_fullscreen" }}
            </i>
            <span>close menu</span>
        </a>

        <div class="horizontal">
            <a href="javascript:void(0)"
                class="unfoldIcon">
                <i class="material-symbols-outlined pointer">unfold_more_double</i>
            </a>

            <a href="javascript:void(0)"
                :title="minimizeSidebar ? 'expand menu' : 'collapse menu'"
                class="isHideForMobile">
                <i @click="onMinimizeSidebar"
                    class="material-symbols-outlined pointer">
                    {{ minimizeSidebar ? "view_list" : "more_vert" }}
                </i>
            </a>

            <SwitchTheme />

            <router-link :to="Routes.home.path"
                title="back to home page"
                :id="Routes.home.name">
                <i class="material-symbols-outlined pointer">first_page</i>
            </router-link>
        </div>

        <!----------------------------------------->
        <div style="padding: 0 10px">
            <hr />
        </div>
        <!----------------------------------------->

        <slot name="left"></slot>

    </nav>

    <div class="rightcontainer"
        :class="{ hasMinimizedProcess: minimizeSidebar, isClosed: isSideNavClose }">
        <slot name="right"></slot>
    </div>
</template>

<style scoped lang="scss">
nav,
.rightcontainer {
    --size-nav-bar: 280px;
    --padding: 10px;
}

.rightcontainer {
    padding: 8px 10px;
}

/* ---------------------------------------- */
/* ICON                                     */

.router-link-active {
    color: var(--color-love);
}

/* ---------------------------------------- */
/* SIDEBAR                                  */
nav {
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: var(--color-background-soft);
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: rgba(var(--rgb-love), 0.2) 0.5px 0 2px, rgba(var(--rgb-love), 0.2) 0.5px 0 4px, rgba(var(--rgb-love), 0.2) 0.5px 0 6px, rgba(var(--rgb-love), 0.1) 0.5px 0 8px, rgba(var(--rgb-love), 0.1) 0.5px 0 10px, rgba(var(--rgb-love), 0.1) 0.5px 0 12px;
    $dot-size: 8px;
    background-image: radial-gradient(var(--color-background) 1px, transparent 1px);
    background-size: $dot-size $dot-size;
}

/* ---------------------------------------- */
/* Style: SIDEBAR > hyperlink               */
nav::v-deep(a) {
    text-decoration: none;
    font-size: var(--font-size);
    color: var(--color-text);
    display: flex;
    justify-content: flex-start;

    span {
        padding: 0 var(--padding);
    }

    @media (hover: hover) {
        &:hover {
            background-color: rgba(var(--rgb-love), 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }
    }
}

/* ---------------------------------------- */
/* horizontal top icon list                 */
nav div.horizontal a {
    cursor: unset;
    background-color: unset;
    backdrop-filter: unset;
    box-shadow: unset;
    display: inline-block;

    @media (hover: hover) {
        &:hover {
            color: var(--color-love);
        }
    }
}

/* ---------------------------------------- */
/* process only hover support               */
@media (hover: hover) {

    // parentMobileOpenCloseIcon
    nav .parentMobileOpenCloseIcon {
        display: none;
    }

    /* if sidebar is hovered display full sidebar  */
    nav.hasMinimizedProcess {
        width: auto;
        position: fixed;
        overflow-y: hidden;

        ::v-deep(span),
        ::v-deep(.itemHideDurinMinimize) {
            display: none;
        }

        ::v-deep(.itemShowDurinMinimize) {
            display: initial;
        }

        ::v-deep(a) {
            padding: 8px calc(var(--padding) + calc(var(--font-size) / 2));
        }

        & div.horizontal a {
            display: none;

            &.unfoldIcon {
                display: block;
            }
        }

        &:hover {
            width: var(--size-nav-bar);
            overflow-y: auto;

            ::v-deep(a) {
                padding: 8px 0 8px calc(var(--padding) + calc(var(--font-size) / 2));
            }

            & div.horizontal a {
                display: inline-block;

                &:first-child {
                    display: none;
                }
            }

            ::v-deep(span),
            ::v-deep(.itemHideDurinMinimize) {
                display: initial;
            }

            ::v-deep(.itemShowDurinMinimize) {
                display: none !important;
            }
        }
    }

    nav:not(.hasMinimizedProcess) {
        width: var(--size-nav-bar);
        position: absolute;

        ::v-deep(a) {
            padding: 8px 0 8px calc(var(--padding) + calc(var(--font-size) / 2));
        }

        & div.horizontal a.unfoldIcon,
        ::v-deep(.itemShowDurinMinimize) {
            display: none;
        }

        ::v-deep(.itemHideDurinMinimize) {
            display: initial;
        }
    }

    .rightcontainer.hasMinimizedProcess {
        /* calculates the minimized size (if show scrollbar-y then include this size !!!) */
        margin-left: calc(calc(var(--font-size) + var(--padding)) + calc(var(--font-size) + var(--padding)));
    }

    .rightcontainer:not(.hasMinimizedProcess) {
        margin-left: var(--size-nav-bar);
    }
}

/* ---------------------------------------- */
/* process only no hover support            */
@media not (hover: hover) {
    nav {
        width: var(--size-nav-bar);
        position: fixed;

        ::v-deep(a) {
            padding: 8px 0 8px calc(var(--padding) + calc(var(--font-size) / 2));
        }

        div.horizontal a.unfoldIcon,
        .isHideForMobile {
            display: none !important;
        }

    }

    /* if button clicked close/open sidebar */
    nav.isClosed {
        width: calc(calc(calc(var(--font-size) + var(--padding)) + calc(var(--font-size) + var(--padding))) + var(--scrollbar-size));

        &:not(.hasMinimizedProcess) {
            width: calc(calc(var(--font-size) + var(--padding)) + calc(var(--font-size) + var(--padding)));
            height: calc(calc(var(--font-size) + var(--padding)) + calc(var(--font-size) + var(--padding)));
            overflow-y: hidden;
            background-color: unset;
            box-shadow: unset;
            background: unset;
        }

        .mobileOpenCloseIcon {
            transform: scale(1.5);
            color: var(--color-blue);
        }

        div.horizontal a,
        ::v-deep(span),
        ::v-deep(.itemHideDurinMinimize) {
            display: none;
        }

        ::v-deep(.itemShowDurinMinimize) {
            display: initial;
        }
    }

    nav:not(.isClosed) {
        width: var(--size-nav-bar);
        overflow-y: auto;

        .mobileOpenCloseIcon {
            color: var(--color-green);
        }

        ::v-deep(.itemShowDurinMinimize) {
            display: none;
        }
    }

    .rightcontainer {
        /* calculates the minimized size (if show scrollbar-y then include this size !!!) */
        margin-left: 0;
    }

    .rightcontainer.hasMinimizedProcess {
        /* calculates the minimized size (if show scrollbar-y then include this size !!!) */
        margin-left: calc(calc(calc(var(--font-size) + var(--padding)) + calc(var(--font-size) + var(--padding))) + var(--scrollbar-size));
    }
}
</style>
