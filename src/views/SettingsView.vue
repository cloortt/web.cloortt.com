<script setup>
import { reactive } from 'vue'
import AppSettings from '@/components/AppSettings.vue'
import SearchRecordInput from '@/components/SearchRecordInput.vue'
import Modal from '@/components/Modal.vue'
import Icon from '@/components/Icon.vue'

const modal = reactive({
  profile: false,
  theme: false,
  notification: false,
  logout: false,
  security: false,
  history: false,
  help: false,
})
</script>
<template>
  <SearchRecordInput searchValue="" placeholder="Search Settings..." />

  <div class="web-settings">
    <AppSettings icon="id-card" title="Profile" @click="modal.profile = true" />

    <AppSettings icon="bank-card" title="Subscription" />

    <!-- <AppSettings icon="notification" title="Notification" @click="modal.notification = true" /> -->

    <AppSettings icon="users" title="Team members" />

    <AppSettings icon="lock-star" title="Security" @click="modal.security = true" />

    <AppSettings icon="pantone" title="Theme" @click="modal.theme = true" />

    <AppSettings icon="file-history" title="History" @click="modal.history = true" />

    <AppSettings icon="file-info" title="Learning" />

    <AppSettings icon="feedback" title="Help" @click="modal.help = true" />

    <AppSettings icon="logout" title="Logout" @click="modal.logout = true" />
  </div>

  <!-- Business Profile Modal Starts -->
  <Modal title="Profile" type="sidebar" :visibility="modal.profile" @close="modal.profile = false">
    <form class="cl-form">
      <div>
        <img
          class="cl-image cl-display-block tiny-size"
          src="https://images.unsplash.com/photo-1624395213043-fa2e123b2656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhlYWRzaG90fGVufDB8fDB8fHww"
          alt="Picture"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">Business name <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Cloortt"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">Business phone <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="Phone number"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">Business Email <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Info@cloortt.com"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">Country of operation <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option value="">--Choose Country--</option>
          <option value="AFGHANISTAN">Afghanistan</option>
          <option value="ALBANIA">Albania</option>
          <option value="ALGERIA">Algeria</option>
          <option value="ANDORRA">Andorra</option>
          <option value="ANGOLA">Angola</option>
          <option value="ANTIGUA AND BARBUDA">Antigua and Barbuda</option>
          <option value="ARGENTINA">Argentina</option>
          <option value="ARMENIA">Armenia</option>
          <option value="AUSTRALIA">Australia</option>
          <option value="AUSTRIA">Austria</option>
          <option value="AZERBAIJAN">Azerbaijan</option>
          <option value="BAHAMAS">Bahamas</option>
          <option value="BAHRAIN">Bahrain</option>
          <option value="BANGLADESH">Bangladesh</option>
          <option value="BARBADOS">Barbados</option>
          <option value="BELARUS">Belarus</option>
          <option value="BELGIUM">Belgium</option>
          <option value="BELIZE">Belize</option>
          <option value="BENIN">Benin</option>
          <option value="BHUTAN">Bhutan</option>
          <option value="BOLIVIA">Bolivia</option>
          <option value="BOSNIA AND HERZEGOVINA">Bosnia and Herzegovina</option>
          <option value="BOTSWANA">Botswana</option>
          <option value="BRAZIL">Brazil</option>
          <option value="BRUNEI DARUSSALAM">Brunei Darussalam</option>
          <option value="BULGARIA">Bulgaria</option>
          <option value="BURKINA FASO">Burkina Faso</option>
          <option value="BURUNDI">Burundi</option>
          <option value="CABO VERDE">Cabo Verde</option>
          <option value="CAMBODIA">Cambodia</option>
          <option value="CAMEROON">Cameroon</option>
          <option value="CANADA">Canada</option>
          <option value="CENTRAL AFRICAN REPUBLIC">Central African Republic</option>
          <option value="CHAD">Chad</option>
          <option value="CHILE">Chile</option>
          <option value="CHINA">China</option>
          <option value="COLOMBIA">Colombia</option>
          <option value="COMOROS">Comoros</option>
          <option value="CONGO, DEMOCRATIC REPUBLIC OF THE">
            Congo, Democratic Republic of the
          </option>
          <option value="CONGO, REPUBLIC OF THE">Congo, Republic of the</option>
          <option value="COSTA RICA">Costa Rica</option>
          <option value="COTE D'IVOIRE">Cote d'Ivoire</option>
          <option value="CROATIA">Croatia</option>
          <option value="CUBA">Cuba</option>
          <option value="CYPRUS">Cyprus</option>
          <option value="CZECH REPUBLIC">Czech Republic</option>
          <option value="DENMARK">Denmark</option>
          <option value="DJIBOUTI">Djibouti</option>
          <option value="DOMINICA">Dominica</option>
          <option value="DOMINICAN REPUBLIC">Dominican Republic</option>
          <option value="ECUADOR">Ecuador</option>
          <option value="EGYPT">Egypt</option>
          <option value="EL SALVADOR">El Salvador</option>
          <option value="EQUATORIAL GUINEA">Equatorial Guinea</option>
          <option value="ERITREA">Eritrea</option>
          <option value="ESTONIA">Estonia</option>
          <option value="ESWATINI">Eswatini</option>
          <option value="ETHIOPIA">Ethiopia</option>
          <option value="FIJI">Fiji</option>
          <option value="FINLAND">Finland</option>
          <option value="FRANCE">France</option>
          <option value="GABON">Gabon</option>
          <option value="GAMBIA">Gambia</option>
          <option value="GEORGIA">Georgia</option>
          <option value="GERMANY">Germany</option>
          <option value="GHANA">Ghana</option>
          <option value="GREECE">Greece</option>
          <option value="GRENADA">Grenada</option>
          <option value="GUATEMALA">Guatemala</option>
          <option value="GUINEA">Guinea</option>
          <option value="GUINEA-BISSAU">Guinea-Bissau</option>
          <option value="GUYANA">Guyana</option>
          <option value="HAITI">Haiti</option>
          <option value="HONDURAS">Honduras</option>
          <option value="HUNGARY">Hungary</option>
          <option value="ICELAND">Iceland</option>
          <option value="INDIA">India</option>
          <option value="INDONESIA">Indonesia</option>
          <option value="IRAN (ISLAMIC REPUBLIC OF)">Iran (Islamic Republic of)</option>
          <option value="IRAQ">Iraq</option>
          <option value="IRELAND">Ireland</option>
          <option value="ISRAEL">Israel</option>
          <option value="ITALY">Italy</option>
          <option value="JAMAICA">Jamaica</option>
          <option value="JAPAN">Japan</option>
          <option value="JORDAN">Jordan</option>
          <option value="KAZAKHSTAN">Kazakhstan</option>
          <option value="KENYA">Kenya</option>
          <option value="KIRIBATI">Kiribati</option>
          <option value="KOREA (DEMOCRATIC PEOPLE'S REPUBLIC OF)">
            Korea (Democratic People's Republic of)
          </option>
          <option value="KOREA, REPUBLIC OF">Korea, Republic of</option>
          <option value="KUWAIT">Kuwait</option>
          <option value="KYRGYZSTAN">Kyrgyzstan</option>
          <option value="LAO PEOPLE'S DEMOCRATIC REPUBLIC">Lao People's Democratic Republic</option>
          <option value="LATVIA">Latvia</option>
          <option value="LEBANON">Lebanon</option>
          <option value="LESOTHO">Lesotho</option>
          <option value="LIBERIA">Liberia</option>
          <option value="LIBYA">Libya</option>
          <option value="LIECHTENSTEIN">Liechtenstein</option>
          <option value="LITHUANIA">Lithuania</option>
          <option value="LUXEMBOURG">Luxembourg</option>
          <option value="MADAGASCAR">Madagascar</option>
          <option value="MALAWI">Malawi</option>
          <option value="MALAYSIA">Malaysia</option>
          <option value="MALDIVES">Maldives</option>
          <option value="MALI">Mali</option>
          <option value="MALTA">Malta</option>
          <option value="MARSHALL ISLANDS">Marshall Islands</option>
          <option value="MAURITANIA">Mauritania</option>
          <option value="MAURITIUS">Mauritius</option>
          <option value="MEXICO">Mexico</option>
          <option value="MICRONESIA (FEDERATED STATES OF)">Micronesia (Federated States of)</option>
          <option value="MOLDOVA, REPUBLIC OF">Moldova, Republic of</option>
          <option value="MONACO">Monaco</option>
          <option value="MONGOLIA">Mongolia</option>
          <option value="MONTENEGRO">Montenegro</option>
          <option value="MOROCCO">Morocco</option>
          <option value="MOZAMBIQUE">Mozambique</option>
          <option value="MYANMAR">Myanmar</option>
          <option value="NAMIBIA">Namibia</option>
          <option value="NAURU">Nauru</option>
          <option value="NEPAL">Nepal</option>
          <option value="NETHERLANDS">Netherlands</option>
          <option value="NEW ZEALAND">New Zealand</option>
          <option value="NICARAGUA">Nicaragua</option>
          <option value="NIGER">Niger</option>
          <option value="NIGERIA">Nigeria</option>
          <option value="NORTH MACEDONIA">North Macedonia</option>
          <option value="NORWAY">Norway</option>
          <option value="OMAN">Oman</option>
          <option value="PAKISTAN">Pakistan</option>
          <option value="PALAU">Palau</option>
          <option value="PALESTINE, STATE OF">Palestine, State of</option>
          <option value="PANAMA">Panama</option>
          <option value="PAPUA NEW GUINEA">Papua New Guinea</option>
          <option value="PARAGUAY">Paraguay</option>
          <option value="PERU">Peru</option>
          <option value="PHILIPPINES">Philippines</option>
          <option value="POLAND">Poland</option>
          <option value="PORTUGAL">Portugal</option>
          <option value="QATAR">Qatar</option>
          <option value="ROMANIA">Romania</option>
          <option value="RUSSIAN FEDERATION">Russian Federation</option>
          <option value="RWANDA">Rwanda</option>
          <option value="SAINT KITTS AND NEVIS">Saint Kitts and Nevis</option>
          <option value="SAINT LUCIA">Saint Lucia</option>
          <option value="SAINT VINCENT AND THE GRENADINES">Saint Vincent and the Grenadines</option>
          <option value="SAMOA">Samoa</option>
          <option value="SAN MARINO">San Marino</option>
          <option value="SAO TOME AND PRINCIPE">Sao Tome and Principe</option>
          <option value="SAUDI ARABIA">Saudi Arabia</option>
          <option value="SENEGAL">Senegal</option>
          <option value="SERBIA">Serbia</option>
          <option value="SEYCHELLES">Seychelles</option>
          <option value="SIERRA LEONE">Sierra Leone</option>
          <option value="SINGAPORE">Singapore</option>
          <option value="SLOVAKIA">Slovakia</option>
          <option value="SLOVENIA">Slovenia</option>
          <option value="SOLOMON ISLANDS">Solomon Islands</option>
          <option value="SOMALIA">Somalia</option>
          <option value="SOUTH AFRICA">South Africa</option>
          <option value="SOUTH SUDAN">South Sudan</option>
          <option value="SPAIN">Spain</option>
          <option value="SRI LANKA">Sri Lanka</option>
          <option value="SUDAN">Sudan</option>
          <option value="SURINAME">Suriname</option>
          <option value="SWEDEN">Sweden</option>
          <option value="SWITZERLAND">Switzerland</option>
          <option value="SYRIAN ARAB REPUBLIC">Syrian Arab Republic</option>
          <option value="TAIWAN, PROVINCE OF CHINA">Taiwan, Province of China</option>
          <option value="TAJIKISTAN">Tajikistan</option>
          <option value="TANZANIA, UNITED REPUBLIC OF">Tanzania, United Republic of</option>
          <option value="THAILAND">Thailand</option>
          <option value="TIMOR-LESTE">Timor-Leste</option>
          <option value="TOGO">Togo</option>
          <option value="TONGA">Tonga</option>
          <option value="TRINIDAD AND TOBAGO">Trinidad and Tobago</option>
          <option value="TUNISIA">Tunisia</option>
          <option value="TURKEY">Turkey</option>
          <option value="TURKMENISTAN">Turkmenistan</option>
          <option value="TUVALU">Tuvalu</option>
          <option value="UGANDA">Uganda</option>
          <option value="UKRAINE">Ukraine</option>
          <option value="UNITED ARAB EMIRATES">United Arab Emirates</option>
          <option value="UNITED KINGDOM">United Kingdom</option>
          <option value="UNITED STATES OF AMERICA">United States of America</option>
          <option value="URUGUAY">Uruguay</option>
          <option value="UZBEKISTAN">Uzbekistan</option>
          <option value="VANUATU">Vanuatu</option>
          <option value="VENEZUELA (BOLIVARIAN REPUBLIC OF)">
            Venezuela (Bolivarian Republic of)
          </option>
          <option value="VIET NAM">Viet Nam</option>
          <option value="YEMEN">Yemen</option>
          <option value="ZAMBIA">Zambia</option>
          <option value="ZIMBABWE">Zimbabwe</option>
        </select>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">Unit of measurement <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option>Centimetres (Cm)</option>
          <option>Inches (In)</option>
        </select>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">Currency <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option>Naira</option>
          <option>Usd</option>
        </select>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">Description <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <textarea
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="Tell us about your business"
        ></textarea>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-flex cl-flex-justify-content-end">
        <button
          class="cl-button lg cl-size cl-txt w-bold cl-bg-base cl-fg-base-faint cl-border width-1 style-solid bc-base"
        >
          Save
        </button>
      </div>
    </form>
  </Modal>
  <!-- Business Profile Modal Ends -->

  <!-- Security Modal Starts -->
  <Modal
    title="Security"
    type="sidebar"
    :visibility="modal.security"
    @close="modal.security = false"
  >
    <form class="cl-form">
      <div>
        <p class="cl-fg-base">Current <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type="password"
          placeholder="xx-xx-xx-xx-xx"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">New <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type="password"
          placeholder="xx-xx-xx-xx-xx"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">Confirm <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type="password"
          placeholder="xx-xx-xx-xx-xx"
        />
      </div>
      <div class="cl-breaker-4"></div>

      <div class="cl-flex cl-flex-justify-content-end">
        <button
          class="cl-button lg cl-size cl-txt w-bold cl-bg-base cl-fg-base-faint cl-border width-1 style-solid bc-base"
        >
          Save
        </button>
      </div>
    </form>
  </Modal>
  <!-- Security Modal Ends -->

  <!-- Theme Modal Starts -->
  <Modal title="Theme" type="small" :visibility="modal.theme" @close="modal.theme = false">
    <div class="web-modal-list">
      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Default</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>

      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Light</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>

      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Dim</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>
    </div>
  </Modal>
  <!-- Theme Modal Ends -->

  <!-- Help Modal Starts -->
  <Modal title="Help" type="small" :visibility="modal.help" @close="modal.help = false">
    <div class="web-modal-list">
      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Terms and policies</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>

      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Report a problem</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>

      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Support</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>
    </div>
  </Modal>
  <!-- Help Modal Ends -->

  <!-- History Modal Starts -->
  <Modal title="History" type="small" :visibility="modal.history" @close="modal.history = false">
    <div class="web-modal-list">
      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Catalog search history</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>

      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Sign In history</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>
    </div>
  </Modal>
  <!-- History Modal Ends -->

  <!-- Logout Modal Starts -->
  <Modal title="Log out" type="small" :visibility="modal.logout" @close="modal.logout = false">
    <div class="cl-breaker-4"></div>
    <div class="cl-breaker-4"></div>
    <p class="cl-fg-base cl-txt align-justified">
      Before you go, please confirm you'd like to log out of your account.
    </p>
    <div class="cl-breaker-4"></div>
    <div class="cl-breaker-4"></div>
    <div class="cl-flex cl-flex-justify-content-end">
      <button
        @click="modal.logout = false"
        class="cl-button sm cl-txt w-bold cl-bg-white cl-fg-base cl-border width-1 style-solid bc-white cl-margin-right"
      >
        Cancel
      </button>
      <button
        class="cl-button sm cl-txt w-bold cl-bg-base cl-fg-base-faint cl-border width-1 style-solid bc-base"
      >
        Confirm
      </button>
    </div>
  </Modal>
  <!-- Logout Modal Ends -->
</template>
