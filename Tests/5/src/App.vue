<template>
  <header>sf</header>

  <main>
    <aside>
      <p>Выберите продукцию</p>

      <div id="select">
        <div
          id="select-choosed"
          @click="selectActive = !selectActive"
          :class="{ active: selectActive }"
        >
          {{ selectedProduct }}
        </div>

        <div id="select-list">
          <template v-for="product in products">
            <div
              :data-id="product.id"
              :data-price="product.price"
              class="select-option"
              @click="clickOnSelectItem($event.target)"
            >
              {{ product.title }}
            </div>
          </template>
        </div>
      </div>

      <p>Введите количество</p>

      <input
        type="number"
        ref="countOfProduct"
        value="0"
        id="count-of-products"
      />

      <button id="add-items" @click="addProduct">Добавить</button>
    </aside>

    <section id="list">
      <p>Название товара</p>
      <p>Количество</p>
      <p>Стоимость</p>
      <template v-for="item in selectedItems">
        <div class="list-item">
          <p>{{ item[0] }}</p>
          <p>{{ item[1] }} шт.</p>
          <p>{{ item[2] }}.00</p>
        </div>
      </template>
    </section>

    <section id="all-count">
      <p>Итого: {{ allPrice }}</p>

      <button id="save" @click="saveItems">Сохранить</button>

      <template v-if="finalCode">
        <p id="final-code">
          Номер заказа: <span>{{ finalCode }}</span>
        </p>
      </template>
    </section>
  </main>

  <footer>very intresting tail</footer>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      selectActive: false,
      selectedProduct: "Выберите продукт",
      selectedPrice: null,
      selectedId: null,

      selectedItems: [],

      allPrice: 0,
      finalCode: null,
    };
  },
  created() {
    fetch("https://dev-su.eda1.ru/test_task/products.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.products = data.products;
      });
  },
  methods: {
    clickOnSelectItem: function (el) {
      this.selectedProduct = el.innerText;
      this.selectedPrice = el.getAttribute("data-price");
      this.selectActive = false;
      this.selectedId = el.getAttribute("data-id");
    },
    addProduct: function () {
      const clenedCount = this.$refs.countOfProduct.value.replace(/^0+/, "");
      this.selectedItems.push([
        this.selectedProduct,
        clenedCount,
        `${clenedCount * this.selectedPrice}`,
        this.selectedId,
        clenedCount,
      ]);

      this.allPrice += this.$refs.countOfProduct.value * this.selectedPrice;

      // clear
      this.selectedProduct = "Выберите продукт";
      this.$refs.countOfProduct.value = 0;
      this.selectedPrice = 0;
      this.selectedId = 0;
    },
    saveItems: function () {
      let data = [];
      this.selectedItems.map((el) => {
        data.push({ product_id: el[3], quantity: el[4] });
      });

      fetch("https://dev-su.eda1.ru/test_task/save.php", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          this.finalCode = data.code;
        });
    },
  },
};
</script>

<style>
#app {
  position: relative;
}
:root {
  --header-height: 60px;
  --footer-height: 220px;
}
body {
  min-height: 100vh;
  padding: var(--header-height) 0 var(--footer-height);
}
header {
  position: fixed;
  width: 100vw;
  height: var(--header-height);
  top: 0;
  left: 0;

  display: inline-flex;
  align-items: center;

  color: #ffffff;
  background: #755858;
  padding: 0 24px;
  z-index: 3;
}

main {
  position: relative;
  display: grid;
  grid-template-columns: 400px auto;
  grid-column-gap: 50px;
  margin: 36px 24px;
  overflow: hidden;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: var(--footer-height);

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: #ffffff;
  background-color: #222222;

  padding: 0 24px 16px;
}

aside {
  position: relative;
}
aside > p:not(:first-of-type) {
  margin: 10px 0 0 0;
}
#select {
  position: relative;
  width: 100%;
}
#select-choosed,
#count-of-products {
  position: relative;
  width: 100%;
  display: inline-flex;
  align-items: center;
  height: 40px;
  color: #0170ae;
  border: 1px solid #000000;
  padding: 0 16px;
}

#add-items {
  position: relative;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 40px;
  color: #fff;
  background-color: #0170ae;
  border: 1px solid #000000;
  padding: 0 16px;
  border-radius: 2px;
  margin: 16px 0 0 0;
}

#select-list {
  max-height: 160px;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 2;
  width: 100%;
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s, visibility 0.05s;
  background: #fff;
  padding: 8px 16px;
  border: 1px solid #a59d9d;
  border-radius: 0 0 10px 10px;
}

.select-option {
  padding: 6px 0;
  cursor: pointer;
}

.select-option:hover {
  background: #a59d9d;
}

#select-choosed.active ~ #select-list {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s, visibility 0.1s;
}

#list,
.list-item {
  display: grid;
  grid-template-columns: auto repeat(2, 130px);
  grid-template-rows: min-content;
  grid-column-gap: 16px;
  height: fit-content;
}

#list > p {
  color: #0170ae;
}

#list > p:not(:first-of-type),
.list-item p:not(:first-of-type) {
  text-align: end;
}

.list-item {
  grid-column: 1/4;
}

#all-count {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #2fa6ea;
  padding: 8px 0 0;
}

#all-count > p:first-child {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: end;
}

#save {
  margin: 16px 0 0;
  color: #fff;
  background-color: #61a91a;
  cursor: pointer;
  height: 40px;
  width: 394px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#final-code {
  margin: 32px 0 0;
}

#final-code span {
  color: red;
  font-size: 1.2em;
}

@media (max-width: 992px) {
  :root {
    --header-height: 40px;
    --footer-height: 140px;
  }
  main {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-row-gap: 24px;
    margin: 24px 16px;
  }

  #all-count {
    grid-row: 3;
    grid-column: 1;
  }

  #list, .list-item {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-row-gap: 8px;
  }
/* 
  main, {
    width: calc(100vw - 16px* 2);
  } */
}
</style>
