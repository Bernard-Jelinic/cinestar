const copyrightfooter = {
    template: `
        <footer class="copyright-footer">
        © Copyright {{currentYear}} Bernard Jelinić
        </footer>
    `,
    computed: {
        currentYear(){
            return new Date().getFullYear()
        }
    }
}