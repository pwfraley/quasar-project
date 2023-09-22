import { Model } from "pinia-orm";

export default class MasterData extends Model {
  static entity = "masterdata";

  static typeKey = "typeName";

  static types() {
    return {
      MasterData: MasterData, // Existirt nicht, muss aber sein damit pinia-orm funktioniert
      // 0: Affectivity,
      // 1: AnnouncementType,
      // 2: ImpulsePsychomotricity,
      // 3: Appetite,
      // 4: Appearance,
      // 6: Attention,
      // 11: AppliedDocuments,
      // 12: CareAffairs,
      // 13: Awareness,
      // 20: ClockTestResults,
      // 30: ContactBehavior,
      // 40: DayRhythmicity,
      // 50: ErledigungsArtOrt,
      // 52: Result,
      // 53: GeneralCondition,
      // 55: Reason,
      // 57: FeeGroup,
      // 59: IllusionHallucination,
      // 60: MaritalStatus,
      // 61: QuestionCourt,
      // 70: ExpertiseType,
      // 115: LivingEnvironment,
      // 150: OtherDisorder,
      // 152: Orientation,
      // 153: PlaceAccommodation,
      // 160: Prognosis,
      // 180: InvoiceReasons,
      // 187: Reliability,
      // 190: Sleep,
      // 193: StateNutrition,
      // 195: Stoerungen,
      // 200: TimeExpenditureType,
      // 205: ThinkFormal,
      // 208: ThinkContent,
      // 231: Wohnform,
      // 300: Graduation,
      // 310: GrewUpAt,
      // 320: FearsAndCompulsions,
      // 330: Hallucinations,
      // 340: AdditionalPsychologicalCharacteristics,
      // 350: UncertaintyOfFindings,
      // 360: Gastrointestinal,
      // 370: CardiacRespiratory,
      // 380: Vegetative,
      // 390: OtherSomatic,
      // 400: Neurological,
      // 410: Laterality,
      // 430: Convulsions,
      // 440: SomSupplementary,
      // 500: PhobiasAndCompulsion,
      // 510: SelfExperience,
      // 520: DisordersOfPerception,
      // 550: AssessmentPeriod,
      // 570: Footnotes,
      Affectivity: Affectivity,
      AnnouncementType: AnnouncementType,
      ImpulsePsychomotricity: ImpulsePsychomotricity,
      Appetite: Appetite,
      Appearance: Appearance,
      Attention: Attention,
      AppliedDocuments: AppliedDocuments,
      CareAffairs: CareAffairs,
      Awareness: Awareness,
      ClockTestResults: ClockTestResults,
      ContactBehavior: ContactBehavior,
      DayRhythmicity: DayRhythmicity,
      ExecutionTypePlace: ErledigungsArtOrt,
      Result: Result,
      GeneralCondition: GeneralCondition,
      Reason: Reason,
      FeeGroup: FeeGroup,
      IllusionHallucination: IllusionHallucination,
      MaritalStatus: MaritalStatus,
      QuestionCourt: QuestionCourt,
      ExpertiseType: ExpertiseType,
      LivingEnvironment: LivingEnvironment,
      OtherDisorder: OtherDisorder,
      Orientation: Orientation,
      PlaceAccommodation: PlaceAccommodation,
      Prognosis: Prognosis,
      InvoiceReasons: InvoiceReasons,
      Reliability: Reliability,
      Sleep: Sleep,
      StateNutrition: StateNutrition,
      Disturbances: Stoerungen,
      TimeExpenditureType: TimeExpenditureType,
      ThinkFormal: ThinkFormal,
      ThinkContent: ThinkContent,
      TypeOfResidence: Wohnform,
      Graduation: Graduation,
      GrewUpAt: GrewUpAt,
      FearsAndCompulsions: FearsAndCompulsions,
      Hallucinations: Hallucinations,
      AdditionalPsychologicalCharacteristics:
        AdditionalPsychologicalCharacteristics,
      UncertaintyOfFindings: UncertaintyOfFindings,
      Gastrointestinal: Gastrointestinal,
      CardiacRespiratory: CardiacRespiratory,
      Vegetative: Vegetative,
      OtherSomatic: OtherSomatic,
      Neurological: Neurological,
      Laterality: Laterality,
      Convulsions: Convulsions,
      SomSupplementary: SomSupplementary,
      PhobiasAndCompulsion: PhobiasAndCompulsion,
      SelfExperience: SelfExperience,
      DisordersOfPerception: DisordersOfPerception,
      AssessmentPeriod: AssessmentPeriod,
      Footnotes: Footnotes,
    };
  }

  static fields() {
    return {
      id: this.attr(null),
      shortText: this.string(""),
      longText: this.string(""),
      infoText: this.string(""),
      type: this.number(0),
      typeName: this.string(""),
      sort: this.attr("0"),
      group: this.string(""),
      decimalValue: this.number(0.0),
      createdAt: this.attr(""),
      createdBy: this.attr(""),
      modifiedAt: this.attr(""),
      modifiedBy: this.attr(""),
      deleted: this.boolean(false),
    };
  }
}

class Affectivity extends MasterData {
  static entity = "affectivity";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(0),
      typeName: this.string("Affectivity"),
    };
  }
}

class AnnouncementType extends MasterData {
  static entity = "announcementtype";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(1),
    };
  }
}

class Appearance extends MasterData {
  static entity = "appearance";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(4),
    };
  }
}

class Appetite extends MasterData {
  static entity = "appetite";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(3),
    };
  }
}
class AppliedDocuments extends MasterData {
  static entity = "applieddocuments";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(11),
    };
  }
}

class AssessmentPeriod extends MasterData {
  static entity = "assessmentperiod";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(550),
    };
  }
}

class Attention extends MasterData {
  static entity = "attention";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(6),
    };
  }
}

class Vegetative extends MasterData {
  static entity = "vegetative";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(380),
    };
  }
}

class Awareness extends MasterData {
  static entity = "awareness";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(13),
    };
  }
}

class CardiacRespiratory extends MasterData {
  static entity = "cardiacrespiratory";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(370),
    };
  }
}

class CareAffairs extends MasterData {
  static entity = "careaffairs";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(12),
    };
  }
}

class ClockTestResults extends MasterData {
  static entity = "clocktestresults";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(20),
    };
  }
}

class ContactBehavior extends MasterData {
  static entity = "contactbehavior";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(30),
    };
  }
}

class Convulsions extends MasterData {
  static entity = "convulsions";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(430),
    };
  }
}

class DayRhythmicity extends MasterData {
  static entity = "dayrhythmicity";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(40),
    };
  }
}

class DisordersOfPerception extends MasterData {
  static entity = "disordersOfPerception";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(520),
    };
  }
}

class ErledigungsArtOrt extends MasterData {
  static entity = "erledigungsartort";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(50),
    };
  }
}

class Reason extends MasterData {
  static entity = "reason";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(55),
    };
  }
}

class Result extends MasterData {
  static entity = "result";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(52),
    };
  }
}

class ExpertiseType extends MasterData {
  static entity = "expertisetype";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(70),
    };
  }
}

class FeeGroup extends MasterData {
  static entity = "feeGroup";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(57),
    };
  }
}

class Footnotes extends MasterData {
  static entity = "footnotes";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(570),
    };
  }
}

class Gastrointestinal extends MasterData {
  static entity = "gastrointestinal";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(360),
    };
  }
}

class GeneralCondition extends MasterData {
  static entity = "generalcondition";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(53),
    };
  }
}

class Graduation extends MasterData {
  static entity = "graduation";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(300),
    };
  }
}

class GrewUpAt extends MasterData {
  static entity = "grewupat";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(310),
    };
  }
}

class FearsAndCompulsions extends MasterData {
  static entity = "fearsandcompulsions";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(320),
    };
  }
}

class Hallucinations extends MasterData {
  static entity = "hallucinations";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(330),
    };
  }
}

class IllusionHallucination extends MasterData {
  static entity = "illusionhallucination";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(59),
    };
  }
}

class ImpulsePsychomotricity extends MasterData {
  static entity = "impulsepsychomotricity";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(2),
    };
  }
}

class InvoiceReasons extends MasterData {
  static entity = "invoicereasons";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(180),
    };
  }
}

class Laterality extends MasterData {
  static entity = "laterality";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(410),
    };
  }
}

class LivingEnvironment extends MasterData {
  static entity = "livingenvironment";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(115),
    };
  }
}

class MaritalStatus extends MasterData {
  static entity = "maritalstatus";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(60),
    };
  }
}

class Neurological extends MasterData {
  static entity = "neurological";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(400),
    };
  }
}

class Orientation extends MasterData {
  static entity = "orientation";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(152),
    };
  }
}

class OtherDisorder extends MasterData {
  static entity = "otherdisorder";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(150),
    };
  }
}

class OtherSomatic extends MasterData {
  static entity = "othersomatic";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(390),
    };
  }
}

class PhobiasAndCompulsion extends MasterData {
  static entity = "phobiasandcompulsion";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(500),
    };
  }
}

class PlaceAccommodation extends MasterData {
  static entity = "placesacommodation";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(153),
    };
  }
}

class Prognosis extends MasterData {
  static entity = "prognosis";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(160),
    };
  }
}

class QuestionCourt extends MasterData {
  static entity = "questioncourt";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(61),
    };
  }
}

class Reliability extends MasterData {
  static entity = "reliability";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(187),
    };
  }
}

class SelfExperience extends MasterData {
  static entity = "selfexperience";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(510),
    };
  }
}

class Sleep extends MasterData {
  static entity = "sleep";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(190),
    };
  }
}

class SomSupplementary extends MasterData {
  static entity = "somSupplementary";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(440),
    };
  }
}

class StateNutrition extends MasterData {
  static entity = "statenutrition";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(193),
    };
  }
}

class Stoerungen extends MasterData {
  static entity = "stoerungen";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(195),
    };
  }
}

class AdditionalPsychologicalCharacteristics extends MasterData {
  static entity = "additionalpsychologicalcharacteristics";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(340),
    };
  }
}

class ThinkContent extends MasterData {
  static entity = "thinkcontent";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(208),
    };
  }
}

class ThinkFormal extends MasterData {
  static entity = "thinkformal";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(205),
    };
  }
}

class TimeExpenditureType extends MasterData {
  static entity = "timeexpendituretype";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(200),
    };
  }
}

class UncertaintyOfFindings extends MasterData {
  static entity = "uncertaintyoffindings";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(350),
    };
  }
}

class Wohnform extends MasterData {
  static entity = "wohnform";
  static baseEntity = "masterdata";

  static fields() {
    return {
      ...super.fields(),
      type: this.number(231),
    };
  }
}

export {
  MasterData,
  Affectivity,
  AnnouncementType,
  Appearance,
  Appetite,
  AppliedDocuments,
  AssessmentPeriod,
  Attention,
  Vegetative,
  Awareness,
  CardiacRespiratory,
  CareAffairs,
  ClockTestResults,
  ContactBehavior,
  Convulsions,
  DayRhythmicity,
  DisordersOfPerception,
  ErledigungsArtOrt,
  Reason,
  Result,
  ExpertiseType,
  FearsAndCompulsions,
  FeeGroup,
  Footnotes,
  Gastrointestinal,
  GeneralCondition,
  Graduation,
  GrewUpAt,
  Hallucinations,
  IllusionHallucination,
  ImpulsePsychomotricity,
  InvoiceReasons,
  Laterality,
  LivingEnvironment,
  MaritalStatus,
  Neurological,
  Orientation,
  OtherDisorder,
  OtherSomatic,
  PhobiasAndCompulsion,
  PlaceAccommodation,
  Prognosis,
  QuestionCourt,
  Reliability,
  SelfExperience,
  Sleep,
  SomSupplementary,
  StateNutrition,
  Stoerungen,
  AdditionalPsychologicalCharacteristics,
  ThinkContent,
  ThinkFormal,
  TimeExpenditureType,
  UncertaintyOfFindings,
  Wohnform,
};
