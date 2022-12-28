// use client;
import Image from 'next/image';
import React, { memo, useEffect, useState } from 'react';
import styles from './page.module.css';
// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ["latin"] });

("use strict");

export function App(props: any) {
  return (
    <div className={styles.mod}>
      <div className={styles.group}>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.group_1}>
                <img
                  className={styles.large_icon}
                  src={"../images/img_0.png"}
                />
                <div className={styles.view}>
                  <img
                    className={styles.icon_circle}
                    src={"../images/img_1.png"}
                  />
                  <img
                    className={styles.icon_circle_1}
                    src={"../images/img_2.png"}
                  />
                </div>
              </div>
              <img className={styles.logo} src={"../images/img_3.png"} />
            </div>
            <div className={styles.wrapper_1}>
              <span className={styles.tag}>峰会介绍</span>
              <span className={styles.label}>峰会议程</span>
              <span className={styles.word}>评审委员会</span>
              <span className={styles.tag_1}>合作伙伴</span>
              <span className={styles.label_1}>相关资料</span>
            </div>
          </div>
          <img className={styles.icon_circle_2} src={"../images/img_4.png"} />
        </div>
        <div className={styles.body}>
          <img className={styles.text_background} src={"../images/img_5.png"} />
          <span className={styles.num}>2022</span>
        </div>
        <span className={styles.select_future}>Select Future</span>
        <span className={styles.from_doris}>From Doris</span>
        <div className={styles.submain}>
          <div className={styles.icon_text_wrapper}>
            <img className={styles.icon_text} src={"../images/img_6.png"} />
          </div>
          <span className={styles.title}>线上</span>
        </div>
        <div className={styles.button}>
          <span className={styles.caption}>前往观看</span>
        </div>
        <span className={styles.introduction}># Introduction</span>
        <div className={styles.row_1}>
          <div className={styles.container_1}>
            <span className={styles.summary}>
              Doris Summit是由Apache软件基金会官方授权的Apache
              Doris社区技术大会，由Apache Doris社区联合众多社区力量联合举办。
            </span>
            <span className={styles.article}>
              大会聚集了社区众多贡献者、开发者、企业用户、国内外-
              -线厂商以及数据上下游社区，旨在同步最新技术动态和未来开发计划、分享行业内围绕Apache
              Doris生态的生产实践案例以及解决方案，是Apache
              Doris开发者和使用者不可错过的盛会。
            </span>
          </div>
          <div className={styles.container_2}>
            <div className={styles.wrapper_2}>
              <img className={styles.action_bg} src={"../images/img_7.png"} />
              <div className={styles.group_2}>
                <div className={styles.badge_wrapper}>
                  <img className={styles.badge} src={"../images/img_8.png"} />
                </div>
                <img className={styles.logo_1} src={"../images/img_9.png"} />
              </div>
            </div>
            <img className={styles.button_bg} src={"../images/img_10.png"} />
          </div>
        </div>
        <span className={styles.agenda}># Agenda</span>
        <div className={styles.main}>
          <div className={styles.container_3}>
            <img
              className={styles.icon_calendar}
              src={"../images/img_11.png"}
            />
            <span className={styles.title_1}>1月6日</span>
          </div>
          <div className={styles.caption_wrapper}>
            <span className={styles.caption_1}>主论坛</span>
          </div>
        </div>
        <img className={styles.floor_bg} src={"../images/img_12.png"} />
        <img className={styles.long_bg} src={"../images/img_13.png"} />
        <img className={styles.bar} src={"../images/img_14.png"} />
        <img className={styles.atmosphere} src={"../images/img_15.png"} />
        <img className={styles.floor_bg_1} src={"../images/img_16.png"} />
        <img className={styles.long_bg_item_0} src={"../images/img_17.png"} />
        <img className={styles.long_bg_item_1} src={"../images/img_18.png"} />
        <img className={styles.long_bg_item_2} src={"../images/img_19.png"} />
        <img className={styles.long_bg_item_3} src={"../images/img_20.png"} />
        <div className={styles.row_2}>
          <span className={styles.title_2}>商业与数据生态</span>
        </div>
        <img className={styles.long_bg_item_0_1} src={"../images/img_21.png"} />
        <img className={styles.long_bg_item_1_1} src={"../images/img_22.png"} />
        <img className={styles.long_bg_item_2_1} src={"../images/img_23.png"} />
        <img className={styles.long_bg_item_3_1} src={"../images/img_24.png"} />
        <img className={styles.long_bg_item_4} src={"../images/img_25.png"} />
        <img className={styles.long_bg_item_5} src={"../images/img_26.png"} />
        <img className={styles.long_bg_item_6} src={"../images/img_27.png"} />
        <img className={styles.long_bg_item_7} src={"../images/img_28.png"} />
        <img className={styles.long_bg_1} src={"../images/img_29.png"} />
        <img className={styles.bar_1} src={"../images/img_30.png"} />
        <img className={styles.atmosphere_1} src={"../images/img_31.png"} />
        <div className={styles.row_3}>
          <div className={styles.container_4}>
            <img
              className={styles.icon_calendar_1}
              src={"../images/img_32.png"}
            />
            <span className={styles.caption_2}>1月7日</span>
          </div>
          <div className={styles.title_wrapper}>
            <span className={styles.title_3}>行业最佳实践</span>
          </div>
        </div>
        <img className={styles.floor_bg_item_0} src={"../images/img_33.png"} />
        <img className={styles.floor_bg_item_1} src={"../images/img_34.png"} />
        <img className={styles.floor_bg_item_2} src={"../images/img_35.png"} />
        <img className={styles.atmosphere_2} src={"../images/img_36.png"} />
        <img
          className={styles.floor_bg_item_0_1}
          src={"../images/img_37.png"}
        />
        <img
          className={styles.floor_bg_item_1_1}
          src={"../images/img_38.png"}
        />
        <img
          className={styles.floor_bg_item_2_1}
          src={"../images/img_39.png"}
        />
        <img className={styles.floor_bg_item_3} src={"../images/img_40.png"} />
        <img className={styles.floor_bg_item_4} src={"../images/img_41.png"} />
        <img className={styles.floor_bg_item_5} src={"../images/img_42.png"} />
        <img className={styles.floor_bg_item_6} src={"../images/img_43.png"} />
        <img className={styles.floor_bg_item_7} src={"../images/img_44.png"} />
        <img className={styles.floor_bg_item_8} src={"../images/img_45.png"} />
        <img className={styles.long_bg_2} src={"../images/img_46.png"} />
        <img className={styles.bar_2} src={"../images/img_47.png"} />
        <img className={styles.atmosphere_3} src={"../images/img_48.png"} />
        <img className={styles.floor_bg_2} src={"../images/img_49.png"} />
        <img className={styles.long_bg_3} src={"../images/img_50.png"} />
        <span className={styles.program_comittee}># Program Comittee</span>
        <div className={styles.row_4_item_0}>
          <div className={styles.container_5}>
            <img
              className={styles.action_bg_item_0}
              src={"../images/img_51.png"}
            />
            <img
              className={styles.action_bg_item_1}
              src={"../images/img_52.png"}
            />
            <img
              className={styles.action_bg_item_2}
              src={"../images/img_53.png"}
            />
          </div>
          <img className={styles.button_bg_1} src={"../images/img_54.png"} />
        </div>
        <div className={styles.row_4_item_1}>
          <img className={styles.action_bg_1} src={"../images/img_55.png"} />
          <img className={styles.button_bg_2} src={"../images/img_56.png"} />
          <img className={styles.action_bg_2} src={"../images/img_57.png"} />
          <img className={styles.button_bg_3} src={"../images/img_58.png"} />
        </div>
        <div className={styles.row_4_item_2}>
          <img className={styles.action_bg_3} src={"../images/img_59.png"} />
          <img className={styles.button_bg_4} src={"../images/img_60.png"} />
          <img className={styles.action_bg_4} src={"../images/img_61.png"} />
          <img className={styles.button_bg_5} src={"../images/img_62.png"} />
        </div>
        <div className={styles.row_7}>
          <img className={styles.entry_pic} src={"../images/img_63.png"} />
          <img className={styles.entry_pic_1} src={"../images/img_64.png"} />
        </div>
        <span className={styles.partner}># Partner</span>
        <span className={styles.caption_3}>主办</span>
        <img className={styles.action_bg_5} src={"../images/img_65.png"} />
        <div className={styles.row_8}>
          <span className={styles.title_4}>联合举办</span>
          <div className={styles.container_6}>
            <img className={styles.button_bg_6} src={"../images/img_66.png"} />
            <img className={styles.action_bg_6} src={"../images/img_67.png"} />
          </div>
        </div>
        <div className={styles.row_9}>
          <div className={styles.container_7}>
            <span className={styles.caption_4}>合作伙伴</span>
            <span className={styles.info}>（按拼音顺序排序）</span>
          </div>
          <div className={styles.container_8}>
            <img
              className={styles.button_bg_item_0}
              src={"../images/img_68.png"}
            />
            <img
              className={styles.button_bg_item_1}
              src={"../images/img_69.png"}
            />
            <img
              className={styles.button_bg_item_2}
              src={"../images/img_70.png"}
            />
            <img
              className={styles.button_bg_item_3}
              src={"../images/img_71.png"}
            />
            <img
              className={styles.button_bg_item_4}
              src={"../images/img_72.png"}
            />
            <img
              className={styles.button_bg_item_5}
              src={"../images/img_73.png"}
            />
          </div>
        </div>
        <div className={styles.row_10}>
          <img
            className={styles.button_bg_item_0_1}
            src={"../images/img_74.png"}
          />
          <img
            className={styles.button_bg_item_1_1}
            src={"../images/img_75.png"}
          />
          <img
            className={styles.button_bg_item_2_1}
            src={"../images/img_76.png"}
          />
          <img
            className={styles.button_bg_item_3_1}
            src={"../images/img_77.png"}
          />
          <img
            className={styles.button_bg_item_4_1}
            src={"../images/img_78.png"}
          />
          <img
            className={styles.button_bg_item_5_1}
            src={"../images/img_79.png"}
          />
        </div>
        <div className={styles.row_11}>
          <img
            className={styles.button_bg_item_0_2}
            src={"../images/img_80.png"}
          />
          <img
            className={styles.button_bg_item_1_2}
            src={"../images/img_81.png"}
          />
          <img
            className={styles.button_bg_item_2_2}
            src={"../images/img_82.png"}
          />
          <img
            className={styles.button_bg_item_3_2}
            src={"../images/img_83.png"}
          />
          <img
            className={styles.button_bg_item_4_2}
            src={"../images/img_84.png"}
          />
          <img
            className={styles.button_bg_item_5_2}
            src={"../images/img_85.png"}
          />
        </div>
        <div className={styles.row_12}>
          <img
            className={styles.button_bg_item_0_3}
            src={"../images/img_86.png"}
          />
          <img
            className={styles.button_bg_item_1_3}
            src={"../images/img_87.png"}
          />
          <img
            className={styles.button_bg_item_2_3}
            src={"../images/img_88.png"}
          />
        </div>
        <div className={styles.row_13}>
          <span className={styles.title_5}>媒体合作伙伴</span>
          <div className={styles.container_9}>
            <img
              className={styles.action_bg_item_0_1}
              src={"../images/img_89.png"}
            />
            <img
              className={styles.action_bg_item_1_1}
              src={"../images/img_90.png"}
            />
            <img
              className={styles.action_bg_item_2_1}
              src={"../images/img_91.png"}
            />
            <img
              className={styles.action_bg_item_3}
              src={"../images/img_92.png"}
            />
            <img
              className={styles.action_bg_item_4}
              src={"../images/img_93.png"}
            />
            <img
              className={styles.action_bg_item_5}
              src={"../images/img_94.png"}
            />
          </div>
        </div>
        <span className={styles.downoad}># Downoad</span>
        <div className={styles.row_14}>
          <span className={styles.caption_5}>PPT合集下载</span>
        </div>
        <div className={styles.footer} />
        <img className={styles.bar_3} src={"../images/img_95.png"} />
      </div>
    </div>
  );
}

export default App;
