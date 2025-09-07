import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  messages = input.required<string[]>();

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}