<template>
	<div class="goods">
		<div class="menu-wrapper"></div>
		<div class="foods-wrapper"></div>
	</div>
</template>

<script >
	
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				goods: []
			};
		},
		created: {
			this.$http.get('/api/goods').then((response) => {

			});
		},
		methods: {

		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.goods
		display: flex
		position: absolute;
		top: 174px
		bottom: 46px
		width: 100%
		overflow: hidden
		.menu-wrapper
			flex: 0 0 80px
			width: 80px
			background: #F3F5F7
		.foods-wrapper
			flex: 1
			
</style>
