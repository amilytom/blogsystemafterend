<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
        ><i class="el-icon-star-on"></i> {{ title }}
        </el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="infoform" label-width="100px">
          <el-form-item label="博客名称">
            <el-input v-model="infoform.title"></el-input>
          </el-form-item>
          <el-form-item label="副标题">
            <el-input v-model="infoform.subtitle"></el-input>
          </el-form-item>
          <el-form-item label="关于我们">
            <quill-editor ref="myTextEditor" v-model="infoform.about" :options="editorOption"></quill-editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" v-loading="tableLoading">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script>
  import infoApi from '../api/infoApi';
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import {quillEditor} from 'vue-quill-editor';

  export default {
    data() {
      return {
        title: this.$route.meta.title,
        editorOption: {
          placeholder: 'Hello World'
        },
        infoform: {
          title: '',
          subtitle: '',
          about: ''
        },
        tableLoading: false
      };
    },
    components: {
      quillEditor
    },
    created() {
      this.getData();
    },
    methods: {
      // 获取博客信息
      getData() {
        this.tableLoading = true;
        let params = {};
        infoApi
          .getinfo(params)
          .then(res => {
            //console.log(res)
            this.infoform = res.data;
            this.tableLoading = false;
          })
          .catch(err => {
            this.tableLoading = false;
            console.log(err);
          });
      },
      onSubmit() {
        this.tableLoading = true;
        let params = this.infoform;
        infoApi
          .editinfo(params)
          .then(res => {
            this.$message.success('提交成功！');
            this.tableLoading = false;
            this.getData();
          })
          .catch(err => {
            this.tableLoading = false;
            console.log(err);
          });
      }
    }
  };
</script>

