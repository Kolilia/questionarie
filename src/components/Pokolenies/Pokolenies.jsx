import React from "react";
import { useUi } from "../../shared/services/useUi";
import Block from "../../shared/ui/Block";
import xceri1 from "../../shared/images/start-packs/2. Иксеры/1. смайлики иксер.png";
import xceri2 from "../../shared/images/start-packs/2. Иксеры/2. облако слов иксер.png";
import xceri3 from "../../shared/images/start-packs/2. Иксеры/3. одежда иксер.png";
import xceri4 from "../../shared/images/start-packs/2. Иксеры/4. музыка иксер.png";

import bumer1 from "../../shared/images/start-packs/1. Бумер/1. смайлики бумер.png";
import bumer2 from "../../shared/images/start-packs/1. Бумер/2. облако слов бумер.png";
import bumer3 from "../../shared/images/start-packs/1. Бумер/3. одежда бумер.png";
import bumer4 from "../../shared/images/start-packs/1. Бумер/4. музыка бумер.png";

import mil1 from "../../shared/images/start-packs/3. Миллениал/1. смайлики мил.png";
import mil2 from "../../shared/images/start-packs/3. Миллениал/2. облако слов миллениал.png";
import mil3 from "../../shared/images/start-packs/3. Миллениал/3. одежда мил.png";
import mil4 from "../../shared/images/start-packs/3. Миллениал/4. музыка мил.png";

import zumer1 from "../../shared/images/start-packs/4. Зумер/1. смайлики зумер.png";
import zumer2 from "../../shared/images/start-packs/4. Зумер/2. облако слов зумер.png";
import zumer3 from "../../shared/images/start-packs/4. Зумер/3. одежда зумер.jpeg";
import zumer4 from "../../shared/images/start-packs/4. Зумер/4. музыка зумер.png";

import alpha1 from "../../shared/images/start-packs/5. Альфа/1. смайлики альфа.png";
import alpha2 from "../../shared/images/start-packs/5. Альфа/2. облако слов альфа.png";
import alpha3 from "../../shared/images/start-packs/5. Альфа/3. одежда альфа.png";
import alpha4 from "../../shared/images/start-packs/5. Альфа/4. музыка альфа.png";

const Pokolenies = () => {
  const showPokolenies = useUi((state) => state.showPokolenies);

  if (showPokolenies) {
    return (
      <div className="flex flex-col mt-20 px-320  mx-auto">
        <Block
          isLeftPicture
          id="bumer_block"
          imageUrl={bumer1}
          title="Бумеры (годы рождения 1943-1963)"
          text="Выросли в послевоенные годы, ценят стабильность и трудолюбие. Они предпочитают личное общение и охотно читают книги, а не пользуются интернетом для получения информации."
        />

        <Block
          imageUrl={bumer2}
          text="Этот период характеризуется меньшей зависимостью от технологий,  экономическим процветанием, социальными изменениями."
        />

        <Block
          isLeftPicture
          imageUrl={bumer3}
          text="Бумеры стремятся к надежной работе и обеспеченной жизни. Это поколение часто считает, что упорный труд и преданность делу приведут к успеху. Они более консервативны во взглядах, ценят семейные ценности."
        />

        <Block
          imageUrl={bumer4}
          text="Обижаются, если их опыт или положение недооценены, а сами дают оценку окружающим по возрасту и статусу в обществе. Не живут «здесь и сейчас», а думают о долгосрочной перспективе. "
        />

        <Block
          isLeftPicture
          id="xceri_block"
          imageUrl={xceri1}
          title="Иксеры (годы рождения 1963-1984)"
          text="Иксеры выросли в период перехода от индустриального общества к информационному. Ценят индивидуальность и свободу выбора, но также испытывают недоверие к институтам, ведь пережили экономический кризис."
        />

        <Block
          imageUrl={xceri2}
          text="Иксы ищут баланс между работой и личной жизнью. Склонны быть более скептичными и прагматичными. Они относятся к изменениям с осторожностью, но открыты к новым идеям и экспериментам. "
        />

        <Block
          isLeftPicture
          imageUrl={xceri3}
          text="Иксеры интересуются технологиями, но не так активно используют социальные медиа. Часто возвышают стремление к самосовершенствованию."
        />

        <Block
          imageUrl={xceri4}
          text="Часто мечтают о стабильности и принятии, стремятся к качественной жизни, саморазвитию и желают добиться успеха в карьере."
        />

        <Block
          isLeftPicture
          id="mil_block"
          imageUrl={mil1}
          title="Миллениалы (годы рождения 1984-2000)"
          text="Миллениалы оптимистичны, выросли в эпоху цифровизации и глобализации, это влияло на их мировоззрение как на программируемое пространство."
        />

        <Block
          imageUrl={mil2}
          text="Придают большое значение социальной справедливости, разнообразию и экологии. Внимательны к инклюзивности и устойчивому развитию."
        />

        <Block
          isLeftPicture
          imageUrl={mil3}
          text="Миллениалы активно используют технологические новшества и социальные сети, интересуются стартапами, креативной экономикой и изменениями в социальной структуре."
        />

        <Block
          imageUrl={mil4}
          text="Стремятся к личностному и профессиональному росту, хотят изменить мир к лучшему, рассматривают возможности для расширения своих горизонтов через путешествия и личный опыт."
        />

        <Block
          isLeftPicture
          imageUrl={zumer1}
          id="zumer_block"
          title="Зумеры (годы рождения 2000-2012)"
          text="Первое поколение, родившееся в эпоху интернета. Реалистично настроены и осведомлены о социальных, экономических и экологических проблемах."
        />

        <Block
          imageUrl={zumer2}
          text="Ценят честность, прозрачность и активное участие в социальных движениях. Заинтересованы в реализации, но склонны к прокрастинации и ветрености."
        />

        <Block
          isLeftPicture
          imageUrl={zumer3}
          text="Зумеры активно используют цифровые платформы и социальные медиа для самовыражения. Движущая сила контента."
        />

        <Block
          imageUrl={zumer4}
          text="Хотят быть уверенными в завтрашнем дне, но часто живут одним днем. Большое значение придают психическому здоровью и хотят изменить мир, оставив свой след в истории."
        />

        <Block
          isLeftPicture
          id="alpha_block"
          imageUrl={alpha1}
          title="Альфа (годы рождения с 2013)"
          text="Полностью существуют в цифровом мире. Адаптированы к быстрому и непрерывному потреблению информации."
        />

        <Block
          imageUrl={alpha2}
          text="Более открыты к разнообразию и новым идеям, которые основываются на равенстве и интеграции. Стеснение — это не про них. Самовыражаются активнее зумеров."
        />

        <Block
          isLeftPicture
          imageUrl={alpha3}
          text="Легко переключаются с одного канала связи на другой, привыкли к автоматизации процессов и ищут простой выход из ситуации."
        />

        <Block
          imageUrl={alpha4}
          text="Им сложно усидеть на месте и долго воспринимать линейную информацию. Бывают пассивными и предпочитают учебе общение с друзьями. "
        />

        <div className="h-40" />

        <p className="text-xs text-gray-500">
          Временные рамки поколений основаны на статье{" "}
        </p>
        <p className="text-xs text-gray-500">
          http://spsu.ru/news/4525-teoriya-pokolenij-x-y-z-i-a-al-fa-kto-est-kto{" "}
        </p>

        <p className="text-xs text-gray-500">
          Медиа материалы взяты из Pinterest.{" "}
        </p>
      </div>
    );
  }

  return null;
};

export default Pokolenies;
