<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col">
        <b-card>
          <multiselect
            :value = "service"
            label="serviceName"
            :allowEmpty="false"
            :showLabels="false"
            :searchable="false"
            :options="code.serviceId"
            @select="fetchPreference"
          ></multiselect>
        </b-card>

        <section class="board">
          <b-table
            striped
            bordered
            show-empty
            :items="items"
            :fields="fields"
          >

            <template slot="targetPopIdName1" scope="row">
              <span v-if="row.item.isEdit">
                <multiselect
                  v-model="row.item.targetPopIdName1"
                  label="popName"
                  track-by="popId"
                  class="inline pops"
                  :class="{'disSelect': row.value[0] !== undefined}"
                  :multiple="true"
                  :showLabels="false"
                  :searchable="false"
                  :options="code.popList"
                >
                </multiselect>
              </span>
              <span v-else>{{ row.value[0] ? row.value[0].popName : '' }}</span>
            </template>
            <template slot="targetPopIdName2" scope="row">
              <span v-if="row.item.isEdit">
                <multiselect
                  v-model="row.item.targetPopIdName2"
                  label="popName"
                  track-by="popId"
                  class="inline pops"
                  :class="{'disSelect': row.value[0] !== undefined}"
                  :multiple="true"
                  :showLabels="false"
                  :searchable="false"
                  :options="code.popList"
                >
                </multiselect>
              </span>
              <span v-else>{{ row.value[0] ? row.value[0].popName : '' }}</span>
            </template>
            <template slot="targetPopIdName3" scope="row">
              <span v-if="row.item.isEdit">
                <multiselect
                  v-model="row.item.targetPopIdName3"
                  label="popName"
                  track-by="popId"
                  class="inline pops"
                  :class="{'disSelect': row.value[0] !== undefined}"
                  :multiple="true"
                  :showLabels="false"
                  :searchable="false"
                  :options="code.popList"
                >
                </multiselect>
              </span>
              <span v-else>{{ row.value[0] ? row.value[0].popName : '' }}</span>
            </template>
            <template slot="targetPopIdName4" scope="row">
              <span v-if="row.item.isEdit">
                <multiselect
                  v-model="row.item.targetPopIdName4"
                  label="popName"
                  track-by="popId"
                  class="inline pops"
                  :class="{'disSelect': row.value[0] !== undefined}"
                  :multiple="true"
                  :showLabels="false"
                  :searchable="false"
                  :options="code.popList"
                >
                </multiselect>
              </span>
              <span v-else>{{ row.value[0] ? row.value[0].popName : '' }}</span>
            </template>
            <template slot="targetPopIdName5" scope="row">
              <span v-if="row.item.isEdit">
                <multiselect
                  v-model="row.item.targetPopIdName5"
                  label="popName"
                  track-by="popId"
                  class="inline pops"
                  :class="{'disSelect': row.value[0] !== undefined}"
                  :multiple="true"
                  :showLabels="false"
                  :searchable="false"
                  :options="code.popList"
                >
                </multiselect>
              </span>
              <span v-else>{{ row.value[0] ? row.value[0].popName : '' }}</span>
            </template>

            <template slot="popPreferenceUseYn" scope="row">
              <c-switch
                v-if="row.item.isEdit"
                type="icon"
                variant="success"
                v-bind="{on: '\uf00c', off: '\uf00d'}"
                :pill="true"
                v-model="row.item.popPreferenceUseYn"
              ></c-switch>
              <b-badge
                v-else
                pill
                :variant="row.item.popPreferenceUseYn ? 'success' : 'secondary'">
                {{ row.item.popPreferenceUseYn ? '사용' : '미사용' }}
              </b-badge>
            </template>

            <template slot="action" scope="row">
              <span v-if="row.item.isEdit">
                <b-button type="button" size="sm" variant="danger" @click="onView(row)">취소</b-button>
                <b-button type="button" size="sm" variant="primary" @click="onSubmit(row)">저장</b-button>
              </span>
              <span v-else>
                <b-button type="button" size="sm" variant="outline-primary" @click="showHistory(row)">이력</b-button>
                <b-button type="button" size="sm" variant="primary" @click="onEdit(row)">수정</b-button>
              </span>
            </template>
          </b-table>
        </section>

      </div>
    </div><!--/.row-->

    <!-- History Modal -->
    <b-modal size="lg" title="이력관리" v-model="isModalHistory">
      <section class="board">
        <b-table
          striped
          bordered
          hover
          show-empty
          :items="history.items"
          :fields="history.fields"
        >
          <template slot="bypassYn" scope="row">
            {{ row.value ? '사용' : '미사용' }}
          </template>
        </b-table>
      </section>

      <div slot="modal-footer">
        <b-button type="button" size="sm" variant="primary" @click="isModalHistory = false"><i class="fa fa-dot-circle-o"></i> 확인</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import cSwitch from '@/components/Switch'
  export default {
    name: 'onetime',
    components: {
      cSwitch
    },
    data (){
      return {
        fields: {
          popName: {label: 'PoP'},
          targetPopIdName1: {label: '1 *'},
          targetPopIdName2: {label: '2 *'},
          targetPopIdName3: {label: '3 *'},
          targetPopIdName4: {label: '4 *'},
          targetPopIdName5: {label: '5 *'},
          popPreferenceUseYn: {label: '사용여부'},
          action: { label: '관리'}
        },
        items: [],
        originItems: [],
        code: {
          serviceId: [],
          popList: [],
          serviceTypeCode: []
        },
        isLoad: {
          serviceTypeCode: true
        },
        history: {
          fields: {
            createId: {label: '등록/수정자', 'class': 'text-left'},
            histBeginDateTime: {label: '등록/수정일시'},
            expireTime: {label: 'ExpireTime', 'class': 'text-right'},
            bypassYn: { label: 'byPass'}
          },
          items: []
        },
        service: {},
        isModalHistory: false,
        isEdit: false,

        serviceTypeCodeVal: [],
      }
    },

    computed: {
    },

    created (){
      this.fetchPoP();
    },

    methods: {
      // PoP List
      fetchPoP () {
        this.$https.get('/policy/pops')
          .then((res) => {
            this.code.popList = res.data.items;
            this.fetchService();
          });
      },
      // Service List
      fetchService () {
        this.$https.get('/policy/services')
          .then((res) => {
            this.code.serviceId = res.data.items;
            this.service = res.data.items[0];
            this.fetchPreference(res.data.items[0]);
          });
      },
      // PoP Preference List fetch
      fetchPreference (obj = {}){
        const { serviceId } = obj;
        this.$https.get('/policy/popPreference', {
            q: { serviceId }
          })
          .then((res) => {
            this.items = res.data.items.map(obj => {
              const popListObj = {};
              Object.keys(obj).forEach(key => {
                if(/^targetPopIdName\d/.test(key)){
                  let pop = this.code.popList.find(({ popId }) => popId === obj[key]);
                  popListObj[key] = pop ? [pop] : [];
                }
              });
              return {
                ...obj,
                ...popListObj,
                isEdit: false
              }
            });
            this.originItems = JSON.parse(JSON.stringify(this.items))
          });
      },

      onEdit (row) {
        this.isEdit = true
        row.item.isEdit = true
      },

      onView (row) {
        const originRows = this.originItems[row.index];
        Object.keys(originRows).forEach(key => {
          row.item[key] = originRows[key]
        });
        row.item.isEdit = false;
      },

      onSubmit (row) {
        const popIdObj = {};
        Object.keys(row.item).forEach(key => {
          if(/^targetPopIdName/.test(key)){
            const number = key.split('targetPopIdName')[1];
            popIdObj[`targetPopId${number}`] = row.item[key][0] ? row.item[key][0].popId : null
          }
        });
        const item = {
          popId: row.item.popId,
          serviceId: this.service.serviceId,
          popPreferenceUseYn: row.item.popPreferenceUseYn,
          modifyHistReason : row.item.modifyHistReason || '',
          ...popIdObj
        };

        console.log(item)

        this.$https.put(`/policy/popPreference`,item)
          .then(() => {
            row.item.isEdit = false;
            this.items[row.index] = row.item;
            this.originItems[row.index] = {...row.item}
          })
          .catch((error) => {
            console.log(error);
            this.onView(row);
          })
      },

      showHistory (row) {
        this.isModalHistory = !this.isModalHistory;
        this.$https.get(`/policy/oneTimeUrl/hist/${row.item.popId}`)
          .then((res) => {
            this.history.items = res.data.items;
          });
      }
    }
  }
</script>

