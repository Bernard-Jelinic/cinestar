const copyrightfooter = {
    template: /*html*/`
        <footer class="copyright-footer">
        © Copyright {{currentYear}} Bernard Jelinić
        </footer>
    `,
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}