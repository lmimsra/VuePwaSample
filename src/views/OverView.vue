<template>
    <!-- TODO: 概要の編集 -->
    <div>
        <Loading v-if="loading"></Loading>
        <div v-else>
            <div class="notification is-danger" v-if="this.$store.getters.importantInfo !== 'no_message'">
                {{this.$store.getters.importantInfo}}
            </div>
            <p class="title">イベントの概要</p>
            <table class="table is-hoverable">
                <tbody>
                <tr>
                    <th width="90">日時</th>
                    <td>
                        ９月1日（土）<br/>
                        現地集合 受付10:30〜
                    </td>
                </tr>
                <tr>
                    <th>場所</th>
                    <td>
                        清水公園キャンプ場<br/>
                        千葉県野田市清水906
                    </td>
                </tr>
                <tr>
                    <th>参加費</th>
                    <td>3500円</td>
                </tr>
                <tr>
                    <th>アクセス</th>
                    <td>
                        東武鉄道野田線 清水公園駅西口から徒歩約10分<br/>
                        池袋から約70分(片道￥799)<br/>
                        ※お車の場合：池袋から60分、別途駐車料金：￥800<br/>
                        (駐車料金はご負担いただけますようお願いいたします。)
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="panel is-danger">
                <div class="panel-block tex-center">
                    このサイトはPWAとなっています。ホーム画面に追加するとネイティブアプリっぽくなります。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from '../components/Loading'

    export default {
        name: "OverView",
        components: {Loading},
        data() {
            return {
                loading: false
            }
        }
    }
</script>

<style scoped>
    table {
        margin-left: auto;
        margin-right: auto;
    }

    .tex-center {
        margin-left: auto;
        margin-right: auto;
    }
</style>
