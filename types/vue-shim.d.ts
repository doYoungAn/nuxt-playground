// declare module 'vue/types/vue' {
//     // import A from 'vue-apollo';
//     interface Vue {
//         $a: any;
//     //   $api: ApiInstance
//     }

//   }
import { ApolloProvider } from 'vue-apollo';
import { DollarApollo } from 'vue-apollo/types/vue-apollo';

declare module 'vue/types/vue' {
    interface Vue {
      $apolloProvider: ApolloProvider
      $apollo: DollarApollo<this>
    }
  }

// declare module "*.vue" {
//     import Vue from 'vue';
//     // import 'vue-apollo';
//     // const a = Vue;
//     // export default a;
//     export default Vue
// }
