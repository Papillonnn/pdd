<template>
    <div class="shop-container">
        <ul class="shop-list">
            <li class="shop-list-item">
                <img src="../../imgs/shop_list/shop_item.png" >
                <h4 class="list-item-title">【唐幂】整条刺绣名族风围巾女士秋冬季中年妈妈羊绒毛披肩保暖</h4>
                <div class="list-item-bottom">
                    <span class="item-price">￥26.9</span>
                    <span class="item-counter">已拼5345件</span>
                    <span class="item-user">
                        <img src="../../imgs/shop_list/user1.jpg" alt="">
                        <img src="../../imgs/shop_list/user2.jpg" alt="">
                    </span>
                    <span class="item-buy">
                        <button>去拼单 ></button>
                    </span>
                </div>
            </li>
            <li class="shop-list-item">
                <img src="../../imgs/shop_list/shop_item.png" >
                <h4 class="list-item-title">【唐幂】整条刺绣名族风围巾女士秋冬季中年妈妈羊绒毛披肩保暖</h4>
                <div class="list-item-bottom">
                    <span class="item-price">￥26.9</span>
                    <span class="item-counter">已拼5345件</span>
                    <span class="item-user">
                        <img src="../../imgs/shop_list/user1.jpg" alt="">
                        <img src="../../imgs/shop_list/user2.jpg" alt="">
                    </span>
                    <span class="item-buy">
                        <button>去拼单 ></button>
                    </span>
                </div>
            </li>
            <li class="shop-list-item">
                <img src="../../imgs/shop_list/shop_item.png" >
                <h4 class="list-item-title">【唐幂】整条刺绣名族风围巾女士秋冬季中年妈妈羊绒毛披肩保暖</h4>
                <div class="list-item-bottom">
                    <span class="item-price">￥26.9</span>
                    <span class="item-counter">已拼5345件</span>
                    <span class="item-user">
                        <img src="../../imgs/shop_list/user1.jpg" alt="">
                        <img src="../../imgs/shop_list/user2.jpg" alt="">
                    </span>
                    <span class="item-buy">
                        <button>去拼单 ></button>
                    </span>
                </div>
            </li>
            <li class="shop-list-item">
                <img src="../../imgs/shop_list/shop_item.png" >
                <h4 class="list-item-title">【唐幂】整条刺绣名族风围巾女士秋冬季中年妈妈羊绒毛披肩保暖</h4>
                <div class="list-item-bottom">
                    <span class="item-price">￥26.9</span>
                    <span class="item-counter">已拼5345件</span>
                    <span class="item-user">
                        <img src="../../imgs/shop_list/user1.jpg" alt="">
                        <img src="../../imgs/shop_list/user2.jpg" alt="">
                    </span>
                    <span class="item-buy">
                        <button>去拼单 ></button>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>
 
<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.shop-container
    margin-bottom 50px
    background-color #f5f5f5
    .shop-list
        .shop-list-item
            img 
                width 100%
            display flex
            flex-direction column
            margin-bottom 10px
            background-color #fff
            .list-item-title
                width 94%
                height 44px
                margin-left 3%
                line-height 22px
                overflow hidden
            .list-item-bottom
                display flex
                flex-direction row
                justify-content space-around
                align-items center  
                margin 10px 0
                .item-price
                    flex 1
                    font-size 18px
                    text-align center
                    font-weight bolder 
                    color red
                .item-counter
                    flex 2
                    font-size 12px
                    color #ccc
                .item-user
                    display flex
                    flex 1
                    justify-content center
                    align-items center
                    img 
                        width 30px
                        border-radius 50%
                    img:nth-child(2)
                        margin-left -6px
                .item-buy
                    flex 2
                    button
                        display flex
                        justify-content center
                        align-items center
                        width 80%
                        height 34px
                        margin-left 10px
                        font-size 15px
                        border none
                        border-radius 8px
                        background-color red
                        color #fff
</style>


