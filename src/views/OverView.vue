<template>
    <div>
        <p class="title">イベントの概要</p>
        <table class="table is-hoverable">
            <tbody>
            <tr>
                <th>日時</th>
                <td>９月？日（？）??時〜</td>
            </tr>
            <tr>
                <th>場所</th>
                <td>どこかの公園？</td>
            </tr>
            <tr>
                <th>参加費</th>
                <td>大人3500円、学生1000円</td>
            </tr>
            <tr>
                <th>工事中</th>
                <td>工事中</td>
            </tr>
            </tbody>
        </table>
        <div class="panel is-danger">
            <div class="panel-block">
            このサイトはPWAとなっています。ホーム画面に追加するとネイティブアプリっぽくなります。
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OverView"
    }
</script>

<style scoped>
 table{
     margin-left: auto;
     margin-right: auto;
 }
</style>