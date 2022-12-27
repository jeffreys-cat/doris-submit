import Image from 'next/image';
import React, { memo, useEffect, useState } from 'react';
import styles from './page.module.css';
// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ["latin"] });

("use strict");

export function App(props: any) {
  return (
    <div className={styles.mod}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            width={500}
            height={200}
            alt="11"
            className={styles.badge}
            src={"/images/img_0.png"}
          />
          <div className={styles.group}>
            <div className={styles.view}>
              <span className={styles.tag}>峰会介绍</span>
              <span className={styles.label}>峰会议程</span>
              <span className={styles.word}>评审委员会</span>
              <span className={styles.tag_1}>合作伙伴</span>
              <span className={styles.label_1}>相关资料</span>
            </div>
            <div className={styles.mask} />
          </div>
        </div>
        <div className={styles.body}>
          <img className={styles.banner} src={"../images/img_1.png"} />
          <img className={styles.action_bg} src={"../images/img_2.png"} />
          <div className={styles.group_1}>
            <span className={styles.introduction}># Introduction</span>
            <div className={styles.view_1}>
              <span className={styles.article}>
                Doris Summit是由Apache软件基金会官方授权的Apache
                Doris社区技术大会，由Apache Doris社区联合众多社区力量联合举办。
                大会聚集了社区众多贡献者、开发者、企业用户、国内外-
                -线厂商以及数据上下游社区，旨在同步最新技术动态和未来开发计划、分享行业内围绕Apache
                Doris生态的生产实践案例以及解决方案，是Apache
                Doris开发者和使用者不可错过的盛会。
              </span>
              <img className={styles.button_bg} src={"../images/img_3.png"} />
            </div>
          </div>
          <span className={styles.agenda}># Agenda</span>
          <div className={styles.group_2}>
            <div className={styles.view_2}>
              <img
                className={styles.icon_calendar}
                src={"../images/img_4.png"}
              />
              <span className={styles.title}>1月6日</span>
            </div>
            <div className={styles.caption_wrapper}>
              <span className={styles.caption}>主论坛</span>
            </div>
          </div>
          <img className={styles.floor_bg} src={"../images/img_5.png"} />
          <img className={styles.long_bg} src={"../images/img_6.png"} />
          <img className={styles.bar} src={"../images/img_7.png"} />
          <img className={styles.atmosphere} src={"../images/img_8.png"} />
          <img className={styles.floor_bg_1} src={"../images/img_9.png"} />
          <img className={styles.long_bg_1} src={"../images/img_10.png"} />
          <img className={styles.bar_1} src={"../images/img_11.png"} />
          <img className={styles.atmosphere_1} src={"../images/img_12.png"} />
          <img className={styles.atmosphere_1} src={"../images/img_13.png"} />
        </div>
      </div>
    </div>
  );
}

export default App;
