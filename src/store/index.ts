import { defineStore } from 'pinia'

export const useLineage = defineStore('lineage', {
    state: () => ({
        lineage: {}
    }),
    actions: {
        setLineage(payload: any) {
            this.lineage = payload;
        }
    }
})