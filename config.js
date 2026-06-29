window.RESERVATION_CONFIG = {
  GAS_WEBAPP_URL: 'https://script.google.com/macros/s/AKfycbz3QyVVry1chcxsvQs4hpzEA7dnseobnCp5_tC-P05NkhZtEUKLiCg1mcClWyx2aAuD/exec',
  LIFF_ID: '',

  STORE_NAME: 'いくら栗東駅前店',
  HEADER_SUBTITLE: '予約受付',
  HERO_TAG: 'LINEからのご予約',
  HERO_TITLE: '来店予約・出張買取りのご予約',
  HERO_LEAD: 'ご希望のメニューと日時を選んで予約できます。',

  SERVICE_NAME: '来店予約 / 出張買取り',
  SERVICE_DURATION_LABEL: '来店30分 / 出張60分',
  LOCATION_LABEL: '栗東駅前',
  MENU_SELECTION_ENABLED: true,
  MENUS: [
    { id: 'visit', name: '来店予約', durationMinutes: 30, durationLabel: '30分', description: '店舗での買取相談をご予約いただけます。' },
    { id: 'home_visit', name: '出張買取り', durationMinutes: 60, durationLabel: '60分', description: 'ご自宅などへの出張買取りをご予約いただけます。' }
  ],
  CLOSED_DATE_RANGES: [
    { start: '12-30', end: '01-02' }
  ],
  ADMIN_SESSION_KEY: 'reservationAdminKey'
};
