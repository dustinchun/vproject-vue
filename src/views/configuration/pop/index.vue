<template>
  <div class="animated fadeIn">
    <b-form @reset="onReset">
      <b-card class="search">
        <div class="form-group row">
          <b-form-fieldset
            class="col-sm-5"
            label="검색어"
            :label-cols="5"
            :horizontal="true">
            <multiselect
              v-model="searchType"
              label="codeName"
              :allowEmpty="false"
              :showLabels="false"
              :searchable="false"
              :options="code.searchType"
            ></multiselect>
          </b-form-fieldset>
          <b-form-fieldset class="col-sm-7 inline-field">
            <b-form-input type="text" v-model="searchItem.searchKeyword" placeholder="Enter Search text"></b-form-input>
          </b-form-fieldset>
        </div>

        <div class="form-group row">
          <b-form-fieldset
            class="col-sm-5"
            label="품솔팀"
            :label-cols="5"
            :horizontal="true">
            <multiselect
              v-model="qualitySolutionTeamCode"
              :showLabels="false"
              :searchable="false"
              :options="code.qualitySolutionTeamCode"
              :loading="isLoad.qualitySolutionTeamCode"
              label="codeName"
              track-by="code"
              placeholder="전체"
            ></multiselect>
          </b-form-fieldset>

          <b-form-fieldset
            class="col-sm-5"
            label="사용여부"
            :label-cols="5"
            :horizontal="true">
            <multiselect
              v-model="searchItem.popUseYn"
              :showLabels="false"
              :searchable="false"
              :options="['사용', '미사용']"
              placeholder="전체"
            ></multiselect>
          </b-form-fieldset>
        </div>

        <div class="form-group row">
          <b-form-fieldset
            class="col-sm-5"
            label="주소"
            :label-cols="5"
            :horizontal="true">
            <multiselect
              v-model="firstAddressCode"
              :showLabels="false"
              :searchable="false"
              :options="code.firstAddressCode"
              :loading="isLoad.firstAddressCode"
              @select="onFirstAddress"
              label="addressCodeName"
              track-by="addressCode"
              placeholder="전체"
            ></multiselect>
          </b-form-fieldset>
          <b-form-fieldset
            v-if="firstAddressCode"
            class="col-sm-7 form-inline inline-field">
            <multiselect
              v-model="secondAddressCode"
              :showLabels="false"
              :searchable="false"
              :options="code.secondAddressCode"
              :loading="isLoad.secondAddressCode"
              label="addressCodeName"
              track-by="addressCode"
              placeholder="전체"
              class="inline"
              style="min-width: 130px"
            ></multiselect>
          </b-form-fieldset>
        </div>

        <div class="form-group row">
          <b-form-fieldset
            class="col-sm-5"
            label="기간"
            :label-cols="5"
            :horizontal="true">
            <multiselect
              v-model="searchDateType"
              label="codeName"
              :allowEmpty="false"
              :showLabels="false"
              :searchable="false"
              :options="code.searchDateType"
            ></multiselect>
          </b-form-fieldset>
          <b-form-fieldset class="col-sm-7 form-inline inline-field date-field">
            <b-form-input type="date" v-model="searchItem.searchDateFrom"></b-form-input> ~
            <b-form-input type="date" v-model="searchItem.searchDateTo"></b-form-input>

            <b-button-group size="sm">
              <b-button variant="outline-primary" @click="onCalendar('today')">오늘</b-button>
              <b-button variant="outline-primary" @click="onCalendar(7, 'days')">7일</b-button>
              <b-button variant="outline-primary" @click="onCalendar(1, 'month')">1개월</b-button>
              <b-button variant="outline-primary" @click="onCalendar(3, 'month')">3개월</b-button>
              <b-button variant="outline-primary" @click="onCalendar('reset')">전체</b-button>
            </b-button-group>
          </b-form-fieldset>
        </div>
        <div slot="footer">
          <b-button type="button" size="sm" variant="primary" @click="onSearch"><i class="fa fa-search"></i> Search</b-button>
          <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
        </div>
      </b-card>
    </b-form>

    <div class="row">
      <div class="col">
        <section class="board-btn">
          <b-button type="button" variant="success">
            <i class="icon-cloud-download"></i>
            엑셀 다운로드
          </b-button>
          <b-button type="button" variant="primary" :to="{ name: 'Pop 등록' }">
            <i class="icon-pencil"></i>
            등록
          </b-button>
        </section>

        <section class="board">
          <b-table
            striped
            bordered
            hover
            show-empty
            :items="items"
            :fields="fields"
            @row-clicked="details"
          >
            <template slot="popUseYn" scope="row">{{row.value? '사용':'미사용'}}</template>
          </b-table>
        </section>

        <section class="board-article d-flex justify-content-between">
          <b-form inline>
            <multiselect
              :value="pageInfo.size"
              :allowEmpty="false"
              :showLabels="false"
              :searchable="false"
              :options="pageOptions"
              @input="onRowSelect"
              class="inline sm"
            ></multiselect>
            <label class="ml-sm-2">Row Per Page</label>
          </b-form>

          <b-pagination
            :value="pageInfo.page"
            :total-rows="pageInfo.totalCount"
            :per-page="pageInfo.size"
            @input="onPagination"
            class="mt-2"
          ></b-pagination>
        </section>
      </div>
    </div><!--/.row-->


  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'pops',
    data (){
      return {
        fields: {
          popId: {label: 'ID'},
          popName: {label: 'Pop Name', 'class': 'text-left'},
          popHostName: {label: 'Host Name(Prefix)', 'class': 'text-left'},
          popAddress: {label: '주소', 'class': 'text-left'},
          qualitySolutionTeamCodeName: {label: '품솔팀'},
          createDateTime: {label: '등록일'},
          modifyDateTime: {label: '수정일'},
          popUseYn: {label: '사용여부'}
        },
        items: [],
        pageInfo: {
          page: 1,
          size: 10,
          resultCount: 1,
          totalCount: 1
        },
        pageOptions: [10, 20, 50, 100],

        queryParams: {},

        searchItem: {
          searchType: 'popName',
          searchKeyword: null,
          qualitySolutionTeamCode: null,
          firstAddressCode: null,
          secondAddressCode: null,
          popUseYn: null,
          searchDateType: 'createDate',
          searchDateFrom: null,
          searchDateTo: null
        },

        code: {
          searchType: [{
            code: 'popName',
            codeName: 'Pop Name'
          },{
            code: 'popHostName',
            codeName: 'Host Name'
          },{
            code: 'popId',
            codeName: 'ID'
          }],
          searchDateType: [{
            code: 'createDate',
            codeName: '등록일'
          },{
            code: 'modifyDate',
            codeName: '수정일'
          }],
          qualitySolutionTeamCode: [],
          firstAddressCode: [],
          secondAddressCode: []
        },
        isLoad: {
          qualitySolutionTeamCode: false,
          firstAddressCode: false,
          secondAddressCode: false
        }
      }
    },

    computed: {
      searchType: {
        get () {
          return this.code.searchType.find(obj => obj.code === this.searchItem.searchType) || null;
        },
        set (newValue) {
          this.searchItem.searchType = newValue !== null ? newValue.code : null;
        }
      },
      searchDateType: {
        get () {
          return this.code.searchDateType.find(obj => obj.code === this.searchItem.searchDateType) || null;
        },
        set (newValue) {
          this.searchItem.searchDateType = newValue !== null ? newValue.code : null;
        }
      },
      qualitySolutionTeamCode: {
        get () {
          return this.code.qualitySolutionTeamCode.find(obj => obj.code === this.searchItem.qualitySolutionTeamCode) || null;
        },
        set (newValue) {
          this.searchItem.qualitySolutionTeamCode = newValue !== null ? newValue.code : null;
        }
      },
      firstAddressCode: {
        get () {
          return this.code.firstAddressCode.find(obj => obj.addressCode === this.searchItem.firstAddressCode) || null;
        },
        set (newValue) {
          this.searchItem.firstAddressCode = newValue !== null ? newValue.addressCode : null;
        }
      },
      secondAddressCode: {
        get () {
          return this.code.secondAddressCode.find(obj => obj.addressCode === this.searchItem.secondAddressCode) || null;
        },
        set (newValue) {
          this.searchItem.secondAddressCode = newValue !== null ? newValue.addressCode : null;
        }
      }
    },

    created (){
      // Pop List
      this.fetchList();

      // 주소 Code
      this.fetchAddress();

      // 품솔팀 Code
      this.$https.get('/system/commonCode', {
          q: { groupCode: 'QUALITY_TEAM' }
        })
        .then((res) => {
          this.isLoad.qualitySolutionTeamCode = false;
          this.code.qualitySolutionTeamCode = res.data.items;
        });
    },

    methods: {
      details (item) {
        this.$router.push({ name: 'Pop 상세', params: { id: item.popId }})
      },

      fetchList (params = {}){
        const defaultParams = {
          page: this.pageInfo.page,
          size: this.pageInfo.size,
          q: this.queryParams
        };

        this.$https.get('/pops', {...defaultParams, ...params})
          .then((res) => {
            this.items = res.data.items;
            this.pageInfo = res.data.pageInfo;
          });
      },

      fetchAddress (param =''){
        this.$https.get('/pops/address', {
            firstDepth: param
          })
          .then((res) => {
            if (param === ''){
              this.isLoad.firstAddressCode = false;
              this.code.firstAddressCode = res.data.items;
            } else {
              this.isLoad.secondAddressCode = false;
              this.code.secondAddressCode = res.data.items;
            }
          });
      },

      onCalendar (day, type){
        this.searchItem.searchDateTo = moment().format('YYYY-MM-DD')

        if (day === 'today'){
          this.searchItem.searchDateFrom = moment().format('YYYY-MM-DD')
        } else if (day === 'reset'){
          this.searchItem.searchDateFrom = null;
          this.searchItem.searchDateTo = null;
        } else {
          this.searchItem.searchDateFrom = moment().subtract(day, type).format('YYYY-MM-DD');
        }
      },

      onSearch (){
        this.queryParams = {};

        Object.keys(this.searchItem).forEach(key => {
          if (this.searchItem[key] !== null && this.searchItem[key] !== ''){
            this.queryParams[key] = (key === 'popUseYn')
              ? (this.searchItem[key] === '사용')
              : this.searchItem[key];
          }
        });

        this.fetchList({ page: 1 });
      },

      onReset (){
        Object.keys(this.searchItem).forEach((key) => {
          if (key === 'searchType'){
            this.searchItem[key] = 'popName';
          } else if (key === 'searchDateType') {
            this.searchItem[key] = 'createDate';
          } else {
            this.searchItem[key] = null;
          }
        });
        this.queryParams = {};
        this.fetchList();
      },

      onRowSelect (size){
        this.fetchList({ page: 1, size });
      },

      onPagination (page){
        this.fetchList({ page });
      },

      onFirstAddress (obj){
        this.fetchAddress(obj.addressCode)
      }
    }
  }
</script>

