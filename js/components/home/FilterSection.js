const FilterSection = {
    template: /*html*/`
    <div class="filter-section">
        <select
          id="select-city"
        >
          <option default hidden>
            Odaberi kino
          </option>
        </select>
        <div class="input-search">
          <input
            class="input"
            type="text"
            placeholder="Traži na Cinestaru"
          />
          <i class="fa fa-search"></i>
        </div>
    </div>
    `
}