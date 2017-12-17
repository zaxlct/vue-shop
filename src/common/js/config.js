export const PAT_TYPE = {
  alipay: '支付宝',
  wxpay: '微信',
  unpa: '银联',
}

export const ORDER_STATUS = [
  {
    name: '0',
    label: '全部',
  },
  {
    name: '1',
    label: '待付款',
  },
  {
    name: '2',
    label: '待发货',
  },
  {
    name: '3',
    label: '已发货',
  },
  {
    name: '4',
    label: '已关闭',
  },
  {
    name: '5',
    label: '退款中',
  },
  {
    name: '6',
    label: '已完成',
  },
  {
    name: '7',
    label: '已退款',
  },
]

export let ORDER_STATUS_DICT = {}
ORDER_STATUS.forEach(order => {
  ORDER_STATUS_DICT[order.name] = order.label
})

export const GOODS_STATUS = [
  {
    text: '全部商品',
    value: 0,
  },
  {
    text: '出售中',
    value: 1,
  },
  {
    text: '已售罄',
    value: 2,
  },
  {
    text: '未上架',
    value: 3,
  },
]

export const COUPON_STATUS = [
  {
    name: '0',
    label: '全部',
  },
  {
    name: '1',
    label: '未领取',
  },
  {
    name: '2',
    label: '已领取',
  },
  {
    name: '3',
    label: '未使用',
  },
  {
    name: '4',
    label: '已使用',
  },
]
