import { AbilityStage, AbilityConstant, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
export default class MyAbilityStage extends AbilityStage {
  onCreate(): void {
    // 应用的 HAP 在首次加载时，为该 Module 初始化操作
    hilog.info(0x0000, 'testTag', '%{public}s', 'AbilityStage onCreate');
  }
  onAcceptWant(want: Want): string {
    // 仅 specified 模式下触发
    return 'MyAbilityStage';
  }
  onMemoryLevel(level: AbilityConstant.MemoryLevel): void {
    // 系统内存调整
    hilog.info(0x0000, 'testTag', 'onMemoryLevel level: %s', level);
  }
}