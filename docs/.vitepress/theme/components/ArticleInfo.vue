<script setup>
import { useData } from 'vitepress'
let articleTypeImages = "/images/original.png"

let { frontmatter } = useData()

const dictArticleType = {"原创":"/images/original.png", "翻译":"/images/translate.png", "转载":"/images/reprint.png"}

// let articleType = dictArticleType[frontmatter.articleType]
// if (articleType) {
//   articleTypeImages = "/images/" + articleType
// }

// alert(articleType)

</script>

<template>
  <div class="article-info-box language-shell vp-adaptive-theme" >
    <div class="article-bar-top">
      <img class="article-type-img" :src="dictArticleType[frontmatter.articleType]" alt=""/>
      <div class="bar-content">
<!--        <a class="follow-nickName " href="https://blog.csdn.net/arthemis_14" target="_blank" rel="noopener" title="沉舟侧畔千帆过_">沉舟侧畔千帆过_</a>-->
        <img class="article-time-img article-heard-img" src="/publishTime.png" alt="">
        <span class="time">于&nbsp;{{frontmatter.createTime}}&nbsp;发布</span>
<!--        <div class="read-count-box">
          <img class="article-read-img article-heard-img" src="https://csdnimg.cn/release/blogv2/dist/pc/img/articleReadEyes2.png" alt="">
          <span class="read-count">阅读量751</span>
          <a id="blog_detail_zk_collection" class="un-collection" data-report-click="{&quot;mod&quot;:&quot;popu_823&quot;,&quot;spm&quot;:&quot;1001.2101.3001.4232&quot;,&quot;ab&quot;:&quot;new&quot;}">
            <img class="article-collect-img article-heard-img un-collect-status isdefault" style="display:inline-block" src="https://csdnimg.cn/release/blogv2/dist/pc/img/tobarCollect2.png" alt="">
            <img class="article-collect-img article-heard-img collect-status isactive" style="display:none" src="https://csdnimg.cn/release/blogv2/dist/pc/img/tobarCollectionActive2.png" alt="">
            <span class="name">收藏</span>
            <span class="get-collection">15</span>
          </a>
          <div class="read-count-box is-like">
            <img class="article-read-img article-heard-img" style="display:none" id="is-like-imgactive-new" src="https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Active.png" alt="">
            <img class="article-read-img article-heard-img" style="display:block" id="is-like-img-new" src="https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Black.png" alt="">
            <span class="read-count" id="blog-digg-num">点赞数
                            22
                        </span>
          </div>
        </div>-->
      </div>
    </div>
    <div class="blog-tags-box" v-if="frontmatter.articleLabels">
      <div class="tags-box artic-tag-box">
        <span class="label">文章标签：</span>
<!--        <a rel="nofollow" data-report-click="{&quot;mod&quot;:&quot;popu_626&quot;,&quot;spm&quot;:&quot;1001.2101.3001.4223&quot;,&quot;strategy&quot;:&quot;数据库&quot;,&quot;ab&quot;:&quot;new&quot;,&quot;extra&quot;:&quot;{\&quot;searchword\&quot;:\&quot;数据库\&quot;}&quot;}" class="tag-link" href="https://so.csdn.net/so/search/s.do?q=%E6%95%B0%E6%8D%AE%E5%BA%93&amp;t=all&amp;o=vip&amp;s=&amp;l=&amp;f=&amp;viparticle=" target="_blank">数据库</a>-->
<!--        <a rel="nofollow" class="tag-link">json</a>-->
        <a rel="nofollow" class="tag-link" v-for="item in frontmatter.articleLabels">{{ item }}</a>
<!--        <a rel="nofollow" class="tag-link">kingbase</a>
        <a rel="nofollow" class="tag-link">人大金仓</a>
        <a rel="nofollow" class="tag-link">金仓数据库</a>-->
      </div>
    </div>
    <!--<div class="slide-content-box" style="display: none;">
      <div class="article-copyright">
        <div class="creativecommons">
          版权声明：本文为博主原创文章，遵循<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener"> CC 4.0 BY-SA </a>版权协议，转载请附上原文出处链接和本声明。
        </div>
        <div class="article-source-link">
          本文链接：<a href="https://blog.csdn.net/arthemis_14/article/details/135607939" target="_blank">https://blog.csdn.net/arthemis_14/article/details/135607939</a>
        </div>
      </div>
    </div>

    <div class="operating">
      <a class="href-article-edit slide-toggle">版权</a>
    </div>-->
  </div>
</template>

<style>
/*main div.article-info-box {
  position: relative;
  background: #f8f8f8;
  border-radius: 4px
}*/

.bar-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 12px
}

/*main div.blog-content-box .article-header-box .article-header div.article-info-box div.blog-tags-box {
  padding-left: 48px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex
}*/

div.article-info-box  .article-bar-top {
  display: flex;
}

div.article-info-box  .blog-tags-box {
  padding-left: 48px;
  display: flex;
}

div.article-info-box .tags-box {
  margin-bottom: 4px;
}

div.article-info-box  .blog-tags-box .label{
  position: relative;
  font-size: var(--vp-code-font-size);
  color: #6A737D;
}

div.article-info-box  .blog-tags-box  a.tag-link {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: 8px;
  padding: 3px 6px;
  font-size: var(--vp-code-font-size);
  color: #6A737DBF;
  /*color: var(--shiki-dark);*/
  background-color: rgba(255,255,255, 0.1);
  border: 1px solid #6A737D3F;
  /*--shiki-light:#005CC5;*/
  /*--shiki-dark:#79B8FF;*/
  height: 24px;
  line-height: 17px;
  border-radius: 2px;
  display: inline-block;
}

div.article-info-box  .blog-tags-box  a {
  text-decoration: none;
  cursor: pointer;
}

.article-time-img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.article-type-img {
  width: 36px;
  height: 32px;
  line-height: 32px;
}

span.time {
  position: relative;
  font-size: var(--vp-code-font-size);
  color: #6A737D;
}
</style>