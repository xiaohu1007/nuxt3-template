/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-09-18 18:16:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-26 16:24:51
 * @Description: 
 * @FilePath: \joyreels-video-h5\src\api\user\user.d.ts
 */
declare namespace User {
  interface Info {
      /**
       * 活跃天数
       */
      active_days: number;
      /**
       * 归因信息
       */
      attribution: Attribution;
      /**
       * 头像url
       */
      avatar: string;
      /**
       * 可用的奖币总额
       */
      bonus_coins: number;
      /**
       * 可用的金币总额
       */
      coins: number;
      /**
       * 注册时间
       */
      created_at: string;
      driver: string;
      email: string;
      /**
       * 用户id
       */
      id: number;
      /**
       * 三方登录类型，google、facebook
       */
      identity_driver: string;
      /**
       * 用户昵称
       */
      nickname: string;
      receive_checkin_reminder: number;
      /**
       * 可用的指定剧奖币总额
       */
      special_bonus_coins: number;
      token: string;
      /**
       * 可用的通用奖币总额
       */
      universal_bonus_coins: number;
      subscribeInfo: User.Subscribe;
      [property: string]: any;
  }

  /**
   * 归因信息
   */
  interface Attribution {
      /**
       * 来源渠道
       */
      channel: string;
      /**
       * 来源素材
       */
      media_source: string;
      [property: string]: any;
  }

  interface Subscribe {
      /**
       * 是否自动续订，0-否 1-是
       */
      is_auto_renewing: number;
      /**
       * 订阅是否已过期，0-否 1-是
       */
      is_expired: number;
      /**
       * iso 过期时间，iso8601格式
       */
      iso_expired_at: string;
      /**
       * 剩余天数，保留两位小数
       */
      subscribe_days_left: number;
      /**
       * 订阅周期，7-week 30-month 90-quarter
       */
      subscription_cycle: number;
      [property: string]: any;
  }

  interface BonusLogs {
      items: BonusLogsItem[];
      total: number;
      [property: string]: any;
  }

  interface BonusLogsItem {
      /**
       * 奖币数量
       */
      amount: number;
      /**
       * 已使用的奖币数量
       */
      consumed_amount: number;
      /**
       * 是否已过期， 0-否 1-是
       */
      is_expired: number;
      /**
       * 获取时间， iso8601格式
       */
      iso_created_at: string;
      /**
       * 过期时间， iso8601格式
       */
      iso_expired_at: string;
      /**
       * 奖币来源文本
       */
      source_text: string;
      [property: string]: any;
  }

  interface UnlockLogs {
      items: UnlockLogsItem[];
      total: number;
      [property: string]: any;
  }

  interface UnlockLogsItem {
      /**
       * 解锁使用数量 ，负数
       */
      amount: number;
      /**
       * 解锁使用奖币数量， 负数
       */
      bonus_coins: number;
      /**
       * 解锁使用金币数量， 负数
       */
      coins: number;
      /**
       * 剧集文本，将 Episode 拼接到解锁的序号
       */
      episode_display_text: string;
      /**
       * 流水记录时间，iso8601格式
       */
      iso_created_at: string;
      /**
       * 短剧id
       */
      playlet_id: number;
      /**
       * 剧名
       */
      playlet_title: string;
      [property: string]: any;
  }

  interface UnlockedEpisodes {
      items: UnlockedEpisodesItem[];
      total: number;
      [property: string]: any;
  }

  interface UnlockedEpisodesItem {
      /**
       * 消耗金券数
       */
      bonus_coins?: number;
      /**
       * 消耗金币数
       */
      coins?: number;
      /**
       * 显示消耗数
       */
      display_consumed_amount?: number;
      /**
       * 剧集序号文本
       */
      episode_display_text?: string;
      /**
       * 剧集序号
       */
      episode_idx?: number;
      /**
       * iso创建时间
       */
      iso_created_at?: string;
      playlet_id?: number;
      /**
       * 剧名
       */
      playlet_title?: string;
      /**
       * 解锁类型
       */
      unlock_type?: number;
      /**
       * 解锁方式文案
       */
      unlocked_action_display_text?: string;
      [property: string]: any;
  }

  interface Orders {
      items: OrdersList[];
      /**
       * 总条数
       */
      total: number;
      [property: string]: any;
  }
  
  interface OrdersList {
      /**
       * 附加信息
       */
      additional_info: null | AdditionalInfo;
      /**
       * 订单金额，单位元
       */
      amount: number;
      /**
       * 格式化后的价格，增加货币、格式化后的价格 单位元
       */
      formatted_price: string;
      /**
       * 订单id
       */
      id: number;
      /**
       * 支付时间
       */
      iso_paid_at: string;
      /**
       * 充值产品
       */
      product: Product;
      [property: string]: any;
  }
  
  interface AdditionalInfo {
      /**
       * 折扣
       */
      discount?: number;
      /**
       * 剧集结束序号，注意处理结束和开始相同，此情况下应该只显示开始
       */
      episode_end_idx?: number;
      /**
       * 剧集开始序号
       */
      episode_start_idx?: number;
      /**
       * 短剧名称
       */
      playlet_title?: string;
      [property: string]: any;
  }
  /**
   * 充值产品
   */
  interface Product {
      /**
       * 充值奖币数量，部分充值产品会为0
       */
      bonus_coins: number;
      /**
       * 充值金币数量
       */
      coins: number;
      /**
       * 产品名称
       */
      title: string;
      type: number;
      [property: string]: any;
  }
}
