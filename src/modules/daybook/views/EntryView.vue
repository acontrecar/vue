<template lang="">
    <div class="entry-title d-felx justify-content-between p-2">

        <div>
            <span class="text-success fs-3 fw-bold">{{day}}</span>
            <span class="mx-1">{{month}}</span>
            <span class="mx-2 fs-4 fw-light">{{year}}</span>
        </div>

        <div>

            <input type="file"
            @change="onSelectedImage"
            ref="imageSelector"
            v-show="false"
            accept="image/png, image/jpeg"
            >

            <button
            v-if="entry.id"
            class="btn btn-danger mx-2"
                @click = "onDeleteEntry"
            >
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary"
            @click="onSelectImage"
            >
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea
        v-model="entry.text"
        placeholder="¿Que sucedio hoy?"></textarea>
    </div>

    <Fab 
    icon="fa-save"
    @on:click="saveEntry"
    />

    <!-- <img 
    src="https://tecnologiasocial.org/wp-content/uploads/2020/07/Persona_pensando_en_el_futuro-768x576.jpg" 
    alt="entry-picture"
    class="img-thumbnail"
    > -->

    <img 
    v-if="localImage"
    :src="localImage" 
    alt="entry-picture"
    class="img-thumbnail"
    >
</template>
<script>

import { defineAsyncComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import getDayMonthYear from '../helpers/getDayMonthYear.js';
import Swal from 'sweetalert2'

export default {

    props: {
        id: {
            type: String,
            required: true,
        }
    },

    components: {
        Fab: defineAsyncComponent(() => import('../components/FabComponent.vue')),
    },


    data() {
        return {
            entry: null,
            localImage: null,
            file: null,
        }
    },

    computed: {
        ...mapGetters('journal', ['getEntriesById']),

        day() {
            const { day } = getDayMonthYear(this.entry.date);
            return day;
        },

        month() {
            const { month } = getDayMonthYear(this.entry.date);
            return month;
        },

        year() {
            const { year } = getDayMonthYear(this.entry.date);
            return year;
        },
    },

    methods: {

        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),

        loadEntry() {

            let entry;

            if (this.id === 'new') {
                entry = {
                    //id: new Date().getTime(),
                    date: new Date().getTime(),
                    text: '',
                    //picture: null,
                }
            } else {
                entry = this.getEntriesById(this.id);
                if (!entry) {
                    return this.$router.push({ name: 'no-entry' });
                }
            }

            this.entry = entry;
        },

        async saveEntry() {

            new Swal({
                title: 'Espere por favor',
                text: 'Guardando información',
                allowOutsideClick: false,
                showConfirmButton: false,
            });

            Swal.showLoading();

            if (this.entry.id) {
                await this.updateEntry(this.entry);
            } else {
                //await action
                const id = await this.createEntry(this.entry);

                this.$router.push({ name: 'entry', params: { id } });
            }

            Swal.fire({
                title: 'Guardado',
                text: 'La información se guardo correctamente',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
            });
        },

        async onDeleteEntry() {

            const { isConfirmed } = await Swal.fire({
                title: '¿Está seguro?',
                text: 'Una vez eliminado no se podrá recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro',
            })

            if (isConfirmed) {
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false,
                })
                Swal.showLoading();
                await this.deleteEntry(this.entry.id);
                this.$router.push({ name: 'no-entry' });
            }

            Swal.fire('Eliminado', '', 'success');

        },

        onSelectedImage(event) {
            const file = event.target.files[0];

            if (!file) {
                this.localImage = null
                this.file = null;
                return;
            }

            this.file = file;

            const fr = new FileReader();
            fr.onloadend = () => {
                this.localImage = fr.result;
            }
            fr.readAsDataURL(file);

        },

        onSelectImage() {
            this.$refs.imageSelector.click();
        }


    },


    created() {
        this.loadEntry();
    },

    watch: {
        id() {
            this.loadEntry();
        }
    }
}
</script>


<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>