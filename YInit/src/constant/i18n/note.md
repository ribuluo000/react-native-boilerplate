### 国际化	显示界面相关常量

eg:
// usage in component
 
import I18n from 'src/constant/i18n/i18n';
 
class Demo extends React.Component {
  render () {
    return (
      <Text>{I18n.t('greeting')}</Text>
    )
  }
}