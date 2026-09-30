document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Malabar', img: 'malabar.png', price: 40000 },
            { id: 2, name: 'Java', img: 'java.png', price: 30000 },
            { id: 3, name: 'Brazil', img: 'brazil.jpg', price: 80000 },
        ],
    }));

    Alpine.store('cart', {
        catalog: [
            { id: 'malabar', name: 'Malabar', image: 'img/product/malabar.png', price: 40000 },
            { id: 'java', name: 'Java', image: 'img/product/java.png', price: 30000 },
            { id: 'brazil', name: 'Brazil', image: 'img/product/brazil.jpg', price: 80000 },
        ],
        items: [],
        open: false,
        customer: { name: '', email: '', phone: '' },
        checkoutMessage: '',
        get count() {
            return this.items.reduce((sum, item) => sum + item.quantity, 0);
        },
        get total() {
            return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        format(amount) {
            return `IDR ${new Intl.NumberFormat('id-ID').format(amount)}`;
        },
        add(productId) {
            const product = this.catalog.find((item) => item.id === productId);
            if (!product) return;

            const cartItem = this.items.find((item) => item.id === productId);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
            this.checkoutMessage = '';
        },
        addByName(name) {
            const product = this.catalog.find((item) => item.name === name.trim());
            if (product) this.add(product.id);
        },
        changeQuantity(productId, amount) {
            const item = this.items.find((product) => product.id === productId);
            if (!item) return;
            item.quantity += amount;
            if (item.quantity <= 0) this.remove(productId);
        },
        remove(productId) {
            this.items = this.items.filter((item) => item.id !== productId);
        },
        checkout() {
            if (!this.count) return;
            this.checkoutMessage = 'Pesanan siap. Hubungi kedai untuk konfirmasi dan pembayaran.';
        },
    });
});