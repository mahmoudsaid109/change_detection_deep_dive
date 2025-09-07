import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { MessagesService } from '../mesage.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  private messageService = inject(MessagesService);
  messages = this.messageService.allMessages;


  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
